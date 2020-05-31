<template>
    <div class="container">
        <div class="card mt-5 mb-5" style="width: 800px">
            <div class="card-header">
                <h5>Task Group</h5>
            </div>
            <div class="card-body">
                <div class="row" v-for="taskitem in [taskgroup]" :key="taskitem.id">
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="taskitem.name" disabled>
                        </div>
                    </div>
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" v-model="taskitem.description" disabled>
                        </div>
                    </div>
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="frequence_type">Frequence Type</label>
                            <input type="text" class="form-control" id="frequence_type" v-model="taskitem.frequence_type" disabled>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <list-task-items :taskitems="taskgroup.task_in_lists"></list-task-items>
                </div>
                <div class="col-12">
                    {{ overview }}
                </div>
            </div>
            <div class="col-12">
                <h5>Add Task Item</h5>
            </div>
            <div class="col-12">
                <div class="form-goup col-12">
                    <div class="form-group">
                        <label for="new_name">Name</label>
                        <input type="text" class="form-control" id="new_name" v-model="new_name">
                    </div>
                </div>
                <div class="form-goup col-12">
                    <div class="form-group">
                        <label for="new_description">Description</label>
                        <input type="text" class="form-control" id="new_description" v-model="new_description">
                    </div>
                </div>
            </div>
            <div class="col-12 mb-3 ml-3">
                <button class="btn btn-primary" @click="add_task_item(new_name, new_description, new_checked, editing)">
                    Save
                </button>
            </div>
        </div>
        <button class="btn btn-secondary" @click="go_back()">Go Back</button>
    </div>
</template>

<script>
    import {create_task_item_api, get_task_group_api} from "@/services/api";
    import ListTaskItems from "@/components/ListTaskItems";

    export default {
        components: {ListTaskItems},
        props: ["id", "edit_id"],
        data() {
          return {
            new_checked: false,
            new_name: '',
            new_description: '',
            editing: false,
          };
        },
        mounted: function() {
            get_task_group_api(this.id).then(response => {
                this.$store.commit('taskgroup', response.data.data);
                //this.taskgroup = response.data.data;
            });
        },
        methods: {
            go_back() {
                this.$router.push({ name: 'taskgroups'})
            },
            add_task_item(name, description, checked, editing) {
                if (editing === false) {
                    create_task_item_api({name: name, description: description, checked: checked}, this.id);
                }
            },
            is_task_item_checked(item) {
                return !!item.checked;
            }
        },
        computed: {
            taskgroup() {
                return this.$store.state.taskgroup;
            },
            overview: function() {
                let total_count = 0;
                let check_count = 0;

                if (this.taskgroup.task_in_lists) {
                    total_count = this.taskgroup.task_in_lists.length;
                    check_count = this.taskgroup.task_in_lists.filter(this.is_task_item_checked).length;
                }

                return `${check_count} of ${total_count} task items are checked`
            }
        }
    };
</script>