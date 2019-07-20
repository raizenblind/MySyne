<template>
<Page actionBarHidden="true">

    <GridLayout >

    </GridLayout>
</Page>
</template>

<script >
const app = require("application")
export default {
data() {
    return {
    listOfItems: ['Handle', 'Sitter', 'Tyre', 'Frame', 'Crank'],
    msg: 'Hello World!'
    }
},
created() {
    const activity = app.android.startActivity;
    const win = activity.getWindow();
    win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
}
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.title {
    text-align: left;
    padding-left: 16;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

.drawer-header {
    margin-bottom: 16;
    background-color: lightblue;
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
    font-weight: bold;
}
.fullscreen {
    background-image: url('~/assets/images/bg2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
</style>
