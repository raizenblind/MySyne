<template>
<Page actionBarHidden="true">

    <GridLayout>
            <Button class='back'@tap='$navigateTo(Main)' verticalAlignment='top' horizontalAlignment='left' borderRadius='100' height='50' width='50' margin='10'></Button>
                
        <!-- <Gif height="100%" width='150%' src='~/assets/images/login.gif'/> -->
        <StackLayout orientation='horizontal' verticalAlignment='center' width='100%'>
            <StackLayout backgroundColor='lightred' width='50%' height='100%'>
                <Image :src="$props.New" horizontalAlignment='center' width="150" height='150' borderWidth='3' borderRadius ='100' borderColor='lightgray'/>
                    <Label fontSize='20' horizontalAlignment='center'  fontWeight='bold' marginTop='10' text="Quality" />
                    <Label text="Age: 6 months" horizontalAlignment='center'/>
                    <Label text="Price: P 100" horizontalAlignment='center'/>
                    
                    <Label text="_________________" fontSize='20' horizontalAlignment='center'/>
                    <StackLayout orientation="horizontal" horizontalAlignment='center'>
                        <StackLayout horizontalAlignment='left' marginLeft='20' orientation="horizontal">
                            <Image height='50' width='50' src="~/assets/images/Biker.png" />
                            <Label fontSize='15' text="Joel Eya" verticalAlignment='center'/>
                        </StackLayout>
                        <StackLayout horizontalAlignment='right' orientation="vertical">
                            <Button text="ADD TO CART" width="50%" @tap='addcart()'/>
                            <Button text="PREVIEW" width="50%"/>
                        </StackLayout>
                    </StackLayout>
            </StackLayout>
            <StackLayout backgroundColor='lightblue' width='50%' height='100%'>
                    <Image :src="$props.Current" horizontalAlignment='center' width="150" height='150' borderWidth='3' borderRadius ='100' borderColor='lightgray'/>  
                    <Label fontSize='20' horizontalAlignment='center'  fontWeight='bold' marginTop='10' text="Quality" />
                    <Label text="Age: 2 Years" horizontalAlignment='center'/>
                    <Label text="Price: P 200" horizontalAlignment='center'/>
                </StackLayout>
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
    props: ['New', 'Current'],
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    },
    methods: {
        addcart() {
            localStorage.setItem('cartimg', this.$props.New)
        },
        visibleMain() {
            this.$navigateTo(Main)
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
.back {
    background-image: url("~/assets/images/back.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
}
</style>
