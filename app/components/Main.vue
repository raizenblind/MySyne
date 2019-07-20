<template>
    <Page actionBarHidden="true">

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <StackLayout class="drawer-header" orientation='vertical'>
                    <Image src="~/assets/images/Biker.png" horizontalAlignment='center' width="150" height='150' borderWidth='3' borderRadius ='100' borderColor='lightgray'/>
                    <Label  text="Name" horizontalAlignment='center'/>
                </StackLayout>
                <StackLayout ~drawerContent backgroundColor="#ffffff">
                    <Label class="drawer-item" text="CUSTOMIZE" backgroundColor='lightblue'/>
                    <Label class="drawer-item" text="INVENTORY"/>
                    <Label class="drawer-item" text="PROFILE"/>
                    <Label class="drawer-item" text="SHOP"/>
                </StackLayout>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*" >
                <Button class='list' @tap="$refs.drawer.nativeView.showDrawer()"  verticalAlignment='top' horizontalAlignment='left' borderRadius='100' height='50' width='50' margin='10'></Button>
                <Button class='save' @tap='animate'  verticalAlignment='top' horizontalAlignment='right' borderRadius='100' height='50' width='50' margin='10'></Button>
                <StackLayout orientation='vertical'>
                    <StackLayout class='fullscreen'>
                        <Gridlayout>
                            <Gridlayout id='fullbike' translateX="0">
                                <Image row='1' :src="newparthandler" width="400" marginLeft='2' marginTop='22' verticalAlignment='top'/>
                                <Image row='1' :src="newpartsaddle" width="400" marginLeft='2' marginTop='22' verticalAlignment='top'/>
                                <Image row='1' id='wheelFront' src="~/assets/images/WheelRear_1.png" width="100" marginRight='170' marginTop='120' verticalAlignment='top'/>
                                <Image row='1' id='wheelRear' src="~/assets/images/WheelFront_1.png" width="100" marginLeft='160' marginTop='120' verticalAlignment='top'/>
                            
                                <Image row='1' :src="newpartframe" width="400" marginBottom='100' verticalAlignment='bottom'/>
                            </Gridlayout>
                            
                            <GridLayout @tap="visibleCollapse()" horizontalAlignment='left' marginTop='50'>
                                <Image  row='1' horizontalAlignment='left' marginTop='50' height='50' src='~/assets/images/back.png' />
                            </GridLayout>

                            <StackLayout id='maindown' height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Button v-for="item in listOfItems" width="25%" :text="item" @tap="showItems(item)" />
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Handle Bar' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%'  width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item, key) in thumbnailHandlerBar" @tap="replaceItem('handlerbar',key)" width="20%" :src="item" height='100%' />
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Saddle' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailSaddle" @tap="replaceItem('saddle',key)" :src="item" height='100%' width="20%"/>
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Tire' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailTire" @tap="replaceItem('tire',key)" :src="item" height='100%' width="50%"/>
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Frame' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailFrame" @tap="replaceItem('frame',key)" :src="item" height='100%' width="20%"/>
                                </StackLayout>
                            </StackLayout>



                            <!-- <StackLayout id='sitterdown' height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                    <StackLayout height='100%' orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                        <Image v-for="item in listSitter" :src="item" width="3" @tap='animate'/>
                                    </StackLayout>
                            </StackLayout> -->
                        </Gridlayout>
                    </StackLayout>

                </StackLayout>
                <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
const app = require("application")
import { topmost } from "ui/frame";
  export default {
    data() {
      return {
        listOfItems: ['Handle Bar', 'Saddle', 'Tire', 'Frame'],
        listSitter: ['~/assets/images/Seater_1.png', '~/assets/images/Seater_2.png',
         '~/assets/images/Seater_3.png', '~/assets/images/Seater_4.png',
          '~/assets/images/Seater_5.png'],
        listHandlerBar: ['~/assets/images/Handle_1.png', '~/assets/images/Handle_2.png',
         '~/assets/images/Handle_3.png', '~/assets/images/Handle_4.png',
          '~/assets/images/Handle_5.png'],
        listSaddle: ['~/assets/images/Seater_1.png', '~/assets/images/Seater_2.png',
         '~/assets/images/Seater_3.png', '~/assets/images/Seater_4.png',
          '~/assets/images/Seater_5.png'],
        listTire: [],
        listFrame: ['~/assets/images/Frame_1.png', '~/assets/images/Frame_2.png',
         '~/assets/images/Frame_3.png', '~/assets/images/Frame_4.png',
          '~/assets/images/Frame_5.png'],
        thumbnailHandlerBar: ['~/assets/thumbnails/Handle_1.png', '~/assets/thumbnails/Handle_2.png',
        '~/assets/thumbnails/Handle_3.png', '~/assets/thumbnails/Handle_4.png',
        '~/assets/thumbnails/Handle_5.png'],
        thumbnailSaddle: ['~/assets/thumbnails/Seat_1.png', '~/assets/thumbnails/Seat_2.png',
        '~/assets/thumbnails/Seat_3.png', '~/assets/thumbnails/Seat_4.png',
        '~/assets/thumbnails/Seat_5.png'],
        thumbnailTire: ['~/assets/thumbnails/Wheel_1.png', '~/assets/thumbnails/Wheel_2.png'], 
        thumbnailFrame: ['~/assets/thumbnails/Frame_1.png', '~/assets/thumbnails/Frame_2.png',
        '~/assets/thumbnails/Frame_3.png', '~/assets/thumbnails/Frame_4.png',
        '~/assets/thumbnails/Frame_5.png'], 
        items: '',
        newparthandler: '~/assets/images/Handle_5.png',
        newpartsaddle: '~/assets/images/Seater_2.png',
        newpartframe: '~/assets/images/Frame_1.png'
      }
    },
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    },
    methods: {
        showItems(a) {
            console.log(a)
            this.items = a
            // this.handleruy = true;
        },
        visibleCollapse() {
            this.items = 'Brake'
        },
        replaceItem(a,b) {
            console.log(b)
            if (a === 'handlerbar') {
                for (var i=0; i<this.listHandlerBar.length; i++) {
                    this.newparthandler = this.listHandlerBar[b]
                }
            }
            else if (a === 'saddle') {
                for (var i=0; i<this.listSaddle.length; i++) {
                    this.newpartsaddle = this.listSaddle[b]
                }
            }
            else if (a === 'frame') {
                for (var i=0; i<this.listFrame.length; i++) {
                    this.newpartframe = this.listFrame[b]
                }
            }
        },
        animate() {
            confirm({
            title: "Confirmation",
            message: "Are you sure you want to save your work?",
            okButtonText: "YES",
            cancelButtonText: "NO"
            }).then(result => {
            
            })
            
            var fullbike = topmost().getViewById("fullbike");
            var wheelRear = topmost().getViewById("wheelRear");
            var wheelFront = topmost().getViewById("wheelFront");
            fullbike.translateX = '-500'
            wheelRear.animate({
                rotate: 360,
                duration: 5000,
                delay: 0,
            }).then(() => { wheelRear.rotate = 0 });
            wheelFront.animate({
                rotate: 360,
                duration: 5000,
                delay: 0,
            }).then(() => { wheelFront.rotate = 0 });
            fullbike.animate({
              rotate: 0,
              translate: { x: 500, y: 0 },
              duration: 5000,
              delay: 0,
            }).then(() => { fullbike.translateX = 0 });
            

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
</style>
