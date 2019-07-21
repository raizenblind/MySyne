<template>
    <Page actionBarHidden="true">

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <StackLayout class="drawer-header" orientation='vertical'>
                    <Image src="~/assets/images/Biker.png" horizontalAlignment='center' width="150" height='150' borderWidth='3' borderRadius ='100' borderColor='lightgray'/>
                    <Label  :text="$props.UserName" horizontalAlignment='center'/>
                </StackLayout>
                <StackLayout ~drawerContent backgroundColor="#ffffff">
                    <Label @tap='$navigateTo(Main)' class="drawer-item" text="CUSTOMIZE" />
                    <Label class="drawer-item" text="INVENTORY" backgroundColor='lightblue'/>
                    <Label class="drawer-item" text="PROFILE"/>
                    <!-- <Label class="drawer-item" text="SHOP"/> -->
                </StackLayout>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*" backgroundColor='white'>
                <Button class='list' @tap="$refs.drawer.nativeView.showDrawer()"  verticalAlignment='top' horizontalAlignment='left' borderRadius='100' height='50' width='50' margin='10'></Button>
                <ScrollView>
                    <StackLayout orientation="vertical" borderRadius='5' borderColor='lightgray'>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Image @tap='itemchoose($event)' src= '~/assets/thumbnails/Handle_5.png' width="20%" height="100" margin='1' backgroundColor='white'/>
                                <Image @tap='itemchoose($event)' src='~/assets/thumbnails/Seater_2.png' width="20%" height="100" margin='1' backgroundColor='white'/>
                                <Image @tap='itemchoose($event)' src="~/assets/thumbnails/Frame_1.png" width="20%" height="100" margin='1' backgroundColor='white'/>
                                <Image @tap='itemchoose($event)' src="~/assets/thumbnails/Wheel_1.png" width="20%" height="100" margin='1' backgroundColor='white'/>
                                <Image @tap='itemchoose($event)' src="~/assets/thumbnails/Wheel_2.png"  width="20%" height="100" margin='1' backgroundColor='white'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                        <FlexboxLayout  orientation="horizontal" backgroundColor='#394bf6' height='100' marginLeft='70'>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                                <Label text="" width="20%" height="100" margin='1' backgroundColor='lightgray'/>
                        </FlexboxLayout>
                    </StackLayout>
                </ScrollView>
                <StackLayout id='mod' visibility='collapse' padding='5' paddingTop='15' paddingBottom='10' horizontalAlignment='right' backgroundColor='lightblue' height='100%' width='250'>
                    <GridLayout>
                        <StackLayout>
                            <Image :src= 'itemset'  width="70" height="70"  backgroundColor='white' marginBottom='5'/>
                                
                            <Textfield borderRadius="3"
                            borderWidth="1"  borderColor='lightblue'
                            :text='transac' height='35' @tap='modal'
                            editable='false' class='drop' backgroundColor='white'
                            fontSize='12' hint='Choose Transaction'/>

                            <Label :visibility='transac === "Trade" ? "visible" :
                            transac === "Both" ? "visible" : "collapse"' marginBottom='5' textWrap='true' fontSize='12' text='What item do you want?(Not required)'/>
                            <Textview :visibility='transac === "Trade" ? "visible" :
                            transac === "Both" ? "visible" : "collapse"' borderRadius="3" 
                            borderWidth="1"  borderColor='lightblue' height='100'
                            fontSize='12' hint='Fill' backgroundColor='white' marginBottom='5'/>
                            <!-- sell-->
                            <Label 
                            :visibility='transac === "Sell" ? "visible" :
                            transac === "Both" ? "visible" : "collapse"' marginBottom='5' textWrap='true' fontSize='12' text='What is price of the item?(required)'/>
                            
                            <Textfield :visibility='transac === "Sell" ? "visible" :
                            transac === "Both" ? "visible" : "collapse"' borderRadius="3" 
                            borderWidth="1"  borderColor='lightblue'
                             height='35' backgroundColor='white'
                            fontSize='12' hint='Price'/>
                           

                        </StackLayout>
                        <StackLayout orientation='horizontal' height='35' fontSize='12' verticalAlignment='bottom' horizontalAlignment='right'>
                            <button text='Cancel' @tap='itemchoose("cancel")'></button>
                            <button text='Save' @tap='itemchoose("cancel")'></button>
                        </StackLayout>
                        
                    </GridLayout>
                </StackLayout>
                <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
const app = require("application")
import { topmost } from "ui/frame";
import Main from "./Main.vue"
    export default {
    data() {
        return {
            Main: Main,
            list: ['Trade', 'Sell', 'Both', 'None'],
            transac: '',
            itemset: ''
        }
    },
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    },
    props: ['UserName'],
    methods: {
        itemchoose(a) {
            var mod = topmost().getViewById("mod");
            if(a ==='cancel')
            {
                mod.visibility='collapse'
            }else
            {
                var mod = topmost().getViewById("mod");
                mod.visibility='visible'
                this.itemset = a.object.src
            }
            
        },
        modal() {
            
            action("Choose Transaction", "Cancel", this.list)
          .then(result => {
            if(result!== 'Cancel'){
                this.transac = result
            }
            })
        }
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
    .list {
    background-image: url("~/assets/images/list.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
    }
    .save {
    background-image: url("~/assets/images/save.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
    }
    .back {
    background-image: url("~/assets/images/back.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
    }
    .drop {
        background-image: url("~/assets/images/dropdown.png");
        background-repeat: no-repeat;
        background-position: 97% 50%;
        background-size: 50 50;
    }
</style>
