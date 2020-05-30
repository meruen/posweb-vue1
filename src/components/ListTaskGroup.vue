<template>
    <div class="container">
        <div class="card mt-5 mb-5">
            <div class="card-header">
                <h5>List Task Groups</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Frequency Type</th>
                        <th>Created at.</th>
                    </thead>
                    <tbody>
                    <tr v-for="taskgroup in taskgroups" :key="taskgroup.id">
                        <td>{{taskgroup.id}}</td>
                        <td>{{taskgroup.name}}</td>
                        <td>{{taskgroup.description}}</td>
                        <td>{{taskgroup.frequence_type}}</td>
                        <td>{{taskgroup.created_at}}</td>
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
    </div>
</template>

<script>
    import { get_task_groups_api } from "../services/api";

    export default {
        data() {
            return {
                taskgroups: []
            };
        },
        methods: {
            go_back() {
                this.$router.go(-1);
            }
        },
        mounted: function() {
            get_task_groups_api().then(
                result => { this.taskgroups = result.data.data; },
            );
        }
    };
</script>