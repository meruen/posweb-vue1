<template>
    <div class="container">
        <div class="card mt-5 mb-5">
            <div class="card-header">
                <h5>Edit Task Item</h5>
            </div>
            <div class="card-body">
                <div class="form-goup col-12">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="taskname">
                    </div>
                </div>
                <button class="btn btn-lg btn-primary" @click="do_save(id, taskname)">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {update_item_api} from "@/services/api";

    export default {
        props: ["id"],
        data() {
            return {
                taskname: ''
            };
        },
        methods: {
            do_save(id, name) {
                update_item_api(id, name).then(response => {
                    this.$router.push({ name: 'taskgroups'});
                    console.log(response.data.data);
                });
            }
        }
    }
</script>