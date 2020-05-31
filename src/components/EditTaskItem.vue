<template>
    <div class="container">
        <div class="card mt-5 mb-5">
            <div class="card-header">
                <h5>Task Items</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Act</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="taskitem in taskitems" :key="taskitem.id">
                            <td>{{taskitem.id}}</td>
                            <td>{{taskitem.name}}</td>
                            <td>
                                <router-link class="btn btn-primary btn-sm" :to="{ name: 'formtaskitem', params: { id: taskitem.id} }">Edit</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {get_task_items_api} from "@/services/api";

    export default {
        data() {
            return {
                taskitems:[],
                current_id: -1
            }
        },
        mounted: function() {
            get_task_items_api(this.id).then(response => {
                this.taskitems = response.data.data;
            });
        },
        methods: {
            start_edit(taskitem) {
                self.current_id = taskitem.id;
            }
        }
    }
</script>