<template>
<Page actionBarHidden="true">

    <GridLayout>
        <!-- <Gif height="100%" width='150%' src='~/assets/images/login.gif'/> -->
        <StackLayout verticalAlignment='center' width='70%'>
            <!-- <Label text='MySyne' color='lightblue' fontSize='60' horizontalAlignment='center'></Label> -->
            <Image src="~/assets/images/Logo_Draft.png" marginTop='-20' height='250' width='250' horizontalAlignment='center'/>
            <TextField hint='Username' marginTop='-30' text='' width="50%">
            </TextField>

            <TextField hint='Password' text='' width="50%">

            </TextField>
            <StackLayout row='1' horizontalAlignment="center" orientation="horizontal">
                <Button text='Login' width='100' horizontalAlignment='center' @tap='navigate'/>
                <Button text='Sign Up' horizontalAlignment='center'/>
            </StackLayout>
        </StackLayout>

        </TextFieild>
    </GridLayout>
</Page>
</template>

<script >
import Main from "./Main.vue"
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
    },
    methods: {
        navigate() {
            this.$navigateTo(Main, {clearHistory: true});
        }
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}
.fullscreen {
    background-image: url('~/assets/images/login.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
