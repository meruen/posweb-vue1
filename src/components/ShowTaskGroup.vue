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
                            <label for="name">Description</label>
                            <input type="text" class="form-control" id="description" :value="taskitem.description" disabled>
                        </div>
                    </div>
                    <div class="form-goup col-12">
                        <div class="form-group">
                            <label for="name">Frequence Type</label>
                            <input type="text" class="form-control" id="frequence_type" :value="taskitem.frequence_type" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {get_task_group_api} from "@/services/api";

    export default {
        props: ["id"],
        data() {
            return {
                taskgroup: {}
            };
        },
        mounted: function() {
            get_task_group_api(this.id).then(response => {
                this.taskgroup = response.data.data;
            });
        }
    };
</script>