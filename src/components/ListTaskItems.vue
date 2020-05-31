<template>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>ID</th>
            <th>Checked</th>
            <th>Name</th>
            <th>Descr.</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in format_task_items(taskitems)" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.checked}}</td>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['taskitems'],
        methods: {
            format_task_items(list) {
                if (list.empty) {
                    return list;
                }

                list = list.map(function(item) {
                    return {
                        id: item.id,
                        checked: item.checked,
                        name: item.task.name,
                        description: item.task.description
                    }
                });

                return list;
            }
        }
    }
</script>