<template>
    <div class="container">
        <div class="card mt-5 mb-5" style="width: 500px">
            <div class="card-header">
                <h5>Task Group</h5>
            </div>
            <div class="card-body">
                <div class="row" v-for="taskitem in [taskgroup]" :key="taskitem.id">
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" :value="taskitem.name" disabled>
                        </div>
                    </div>
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" :value="taskitem.description" disabled>
                        </div>
                    </div>
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="frequence_type">Frequence Type</label>
                            <input type="text" class="form-control" id="frequence_type" :value="taskitem.frequence_type" disabled>
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
        </div>
        <button class="btn btn-secondary" @click="go_back()">Go Back</button>
    </div>
</template>

<script>
    import {get_task_group_api} from "@/services/api";
    import ListTaskItems from "@/components/ListTaskItems";

    export default {
        components: {ListTaskItems},
        props: ["id"],
        data() {
            return {
                taskgroup: this.$store.state.taskgroup
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
            is_task_item_checked(item) {
                return !!item.checked;
            }
        },
        computed: {
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