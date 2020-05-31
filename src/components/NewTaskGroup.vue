<template>
    <div class="container">
        <div class="card mt-5 mb-5" style="width: 500px">
            <div class="card-header">
                <h5>Task Group</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="form-group col-12">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="name">
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" v-model="description">
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <div class="form-group">
                            <label for="frequence_type">Frequence Type</label>
                            <input type="text" class="form-control" id="frequence_type" v-model="frequence_type">
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <button class="btn btn-success" @click="post_task_group()">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {post_task_group_api} from "@/services/api";

    export default {
        data() {
            return {
                name: '',
                description: '',
                frequence_type: ''
            }
        },
        methods: {
            post_task_group() {
                post_task_group_api(this.name, this.description, this.frequence_type).then(response => {
                    console.log(response.data.data);
                    this.$router.push({ name: 'taskgroups'})
                });
            }
        }
    }
</script>