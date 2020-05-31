<template>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>ID</th>
            <th>Checked</th>
            <th>Name</th>
            <th>Descr.</th>
            <th>Act</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in format_task_items" :key="item.id">
            <td>{{item.id}}</td>
            <td class="text-center">
                <div class="form-check">
                    <input type="checkbox" @click="update_task_item(item)" v-model="item.checked" class="form-check-input" id="exampleCheck1" readonly="readonly">
                </div>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
            <td>
                <button class="btn btn-danger btn-sm" @click="delete_task_item(item)">Remove</button>
                <router-link class="btn btn-primary btn-sm ml-3" :to="{ name: 'formtaskitem', params: { id: item.task_id} }">Edit</router-link>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import { update_task_item_api, delete_task_item_api} from "@/services/api";
    import {mapState} from "vuex";

    export default {
        methods: {
            update_task_item(item) {
                const new_task_item = {
                    id: item.id,
                    checked: !item.checked
                }

                update_task_item_api(new_task_item).then(result => {
                    this.$store.commit("taskitem", new_task_item);
                    console.log(result.data.data);
                })
            },
            delete_task_item(item) {
                delete_task_item_api(item).then(function() {
                    location.reload();
                })
            }
        },
        computed: {
            ... mapState(['taskitems']),

            format_task_items() {
                let list = this.taskitems;
                if (list == null || list.empty) {
                    return list;
                }

                list = list.map(function(item) {
                    return {
                        id: item.id,
                        checked: item.checked,
                        name: item.task.name,
                        description: item.task.description,
                        task_id: item.task.id
                    }
                });

                return list;
            }
        }
    }
</script>