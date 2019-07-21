<template>
<Page actionBarHidden="true">

    <GridLayout>
        <StackLayout width='50%' marginTop='20' orientation='horizontal' verticalAlignment='top' horizontalAlignment='center'>
                <TextField hint='Bike'  text='' width='50%'/>
                <Button class='search' verticalAlignment='top' borderRadius='100' width='40' height='40' marginLeft='10'></Button>
                
        </StackLayout>
        
        <!-- <Gif height="100%" width='150%' src='~/assets/images/login.gif'/> -->
        <StackLayout orientation='horizontal' horizontalAlignment='center' verticalAlignment='center' width='100%'>
                <Button @tap='navi()' class='bike_dash' verticalAlignment='top' borderRadius='100' width='100' height='100' margin='10'></Button>
                <Button class='car_dash' verticalAlignment='top' borderRadius='100' width='100' height='100' margin='10'></Button>
                <Button class='comp_dash' verticalAlignment='top' borderRadius='100' width='100' height='100' margin='10'></Button></StackLayout>
        </StackLayout>

    </GridLayout>
</Page>
</template>

<script >
import Main from "./Main.vue"
const app = require("application")
import * as http from "tns-core-modules/http";
import * as Toast from "nativescript-toast";
import { topmost } from 'ui/frame';
export default {
    data() {
        return {
            Main: Main
        }
    },
    props: ['UserName'],
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    },
    methods: {
        navi() {
            this.$navigateTo(Main, {props: {
                                UserName: this.$props.UserName
                            }})
        }
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}
.bike_dash {
    background-image: url("~/assets/images/bike_dash.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
}
.car_dash {
    background-image: url("~/assets/images/car_dash.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
}
.comp_dash {
    background-image: url("~/assets/images/comp_dash.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
}
.search {
    background-image: url("~/assets/images/search.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
}

</style>
