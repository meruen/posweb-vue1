<template>
    <div class="container">
        <div class="card mt-5 mb-5">
            <div class="card-header">
                <h5>List Task Groups</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Frequency Type</th>
                            <th>Created at.</th>
                            <th>Act</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="taskgroup in taskgroups" :key="taskgroup.id">
                        <td>{{taskgroup.id}}</td>
                        <td>{{taskgroup.name}}</td>
                        <td>{{taskgroup.description}}</td>
                        <td>{{taskgroup.frequence_type}}</td>
                        <td>{{taskgroup.created_at}}</td>
                        <td>
                            <router-link class="btn btn-primary btn-sm" :to="{ name: 'showtaskgroup', params: { id: taskgroup.id} }">Show</router-link>
                            <button class="btn btn-danger btn-sm ml-2" @click="delete_task_group(taskgroup.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="card">
                    <div class="card-body">
                        <ul>
                            <code>
                                <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
                                    {{taskgroup}}
                                </li>
                            </code>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-secondary" @click="go_back()">Go Back</button>
        <button class="btn btn-primary ml-2" @click="add_task_group()">Add New</button>
    </div>
</template>

<script>
    import { get_task_groups_api, delete_task_group_api } from "../services/api";

    export default {
        data() {
            return {
                taskgroups: []
            };
        },
        methods: {
            go_back() {
                this.$router.go(-1);
            },
            delete_task_group(id) {
                delete_task_group_api(id).then(function() {
                   location.reload();
                });
            },
            add_task_group() {
                this.$router.push({ name: 'newtaskgroup'})
            }
        },
        mounted: function() {
            get_task_groups_api().then(
                result => { this.taskgroups = result.data.data; },
            );
        }
    };
</script>