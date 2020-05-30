<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1 class="display-4">{{ title }}</h1>
            <p class="lead">poweb-component-test</p>
            <hr class="my-4">
            <p class="lead">
                <button class="btn btn-primary btn-lg" @click="go_to_login()">Users Component</button>
                <button class="btn btn-primary btn-lg ml-2" @click="got_to_list_task_groups()">List Task Groups</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'posweb-vue1'
            }
        },
        methods: {
            go_to_login() {
                this.$router.push({ name: "login"})
            },
            got_to_list_task_groups() {
                this.$router.push({ name: "taskgroups"})
            }
        }
    };
</script>