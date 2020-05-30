<template>
    <div class="container">
        <div class="card mt-5 mb-5">
            <div class="card-header">
                <h5>List Task Groups</h5>
            </div>
            <div class="card-body">

            </div>
        </div>
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
        mounted: function() {
            get_task_groups_api().then(result => { this.taskgroups = result.data.data; });
        }
    };
</script>