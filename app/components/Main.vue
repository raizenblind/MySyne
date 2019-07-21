<template>
    <Page actionBarHidden="true">

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <StackLayout class="drawer-header" orientation='vertical'>
                    <Image src="~/assets/images/Biker.png" horizontalAlignment='center' width="150" height='150' borderWidth='3' borderRadius ='100' borderColor='lightgray'/>
                    <Label  :text="$props.UserName" horizontalAlignment='center'/>
                </StackLayout>
                <StackLayout ~drawerContent backgroundColor="#ffffff">
                    <Label class="drawer-item" text="CUSTOMIZE" backgroundColor='lightblue'/>
                    <Label @tap='$navigateTo(Inventory)' class="drawer-item" text="INVENTORY"/>
                    <Label class="drawer-item" text="PROFILE"/>
                    <!-- <Label class="drawer-item" text="SHOP"/> -->
                </StackLayout>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*" >
                <Button class='list' @tap="$refs.drawer.nativeView.showDrawer()"  verticalAlignment='top' horizontalAlignment='left' borderRadius='100' height='50' width='50' margin='10'></Button>
                <Button :visibility='this.mod === "visible" ? "collapse" :
                this.filt === "visible" ? "collapse" :
                 "visible"' class='save' @tap='animate'  verticalAlignment='top' horizontalAlignment='right' borderRadius='100' height='50' width='50' margin='10' marginRight='70'></Button>
                <Button :visibility='this.mod === "visible" ? "collapse" :
                this.filt === "visible" ? "collapse" : "visible"' class='cart' @tap='opencart("open")'  verticalAlignment='top' horizontalAlignment='right' borderRadius='100' height='50' width='50' margin='10'></Button>
               
                <Button class='back' @tap='visibleCollapse' :visibility="items !=='Brake' ? 'visible' : 'collapse'"  verticalAlignment='bottom' horizontalAlignment='left' borderRadius='100' height='50' width='50' margin='10' marginBottom='110'></Button>
                <Button  @tap='filter("open")' 
                :visibility='this.mod === "visible" ? "collapse" :
                this.filt === "visible" ? "collapse" :
                 "visible"' text='Filter'
                  verticalAlignment='bottom' backgroundColor='white' horizontalAlignment='right' borderRadius='100' height='40' fontSize='12' width='100' margin='10' marginBottom='110'></Button>
                
                <StackLayout orientation='vertical'>
                    <StackLayout class='fullscreen'>
                        <Gridlayout>
                            <Gridlayout id='fullbike' translateX="0">
                                <Image row='1' :src="newparthandler" width="400" marginLeft='2' marginTop='22' verticalAlignment='top'/>
                                <Image row='1' :src="newpartsaddle" width="400" marginLeft='2' marginTop='22' verticalAlignment='top'/>
                                <Image row='1' id='wheelFront' src="~/assets/images/WheelRear_1.png" width="100" marginRight='170' marginTop='120' verticalAlignment='top'/>
                                <Image row='1' id='wheelRear' src="~/assets/images/WheelFront_2.png" width="100" marginLeft='160' marginTop='120' verticalAlignment='top'/>
                            
                                <Image row='1' :src="newpartframe" width="400" marginBottom='100' verticalAlignment='bottom'/>
                            </Gridlayout>

                            <StackLayout id='maindown' height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Button v-for="item in listOfItems" width="25%" :text="item" @tap="showItems(item)" />
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Handle Bar' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%'  width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item, key) in thumbnailHandlerBar" @tap="replaceItem('handlerbar',$event)" width="20%" :src="item" height='100%' />
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Saddle' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailSaddle" @tap="replaceItem('saddle',$event)" :src="item" height='100%' width="20%"/>
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Tire' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' width="100%" orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailTire" @tap="replaceItem('tire',$event)" :src="item" height='100%' width="50%"/>
                                </StackLayout>
                            </StackLayout>

                            <StackLayout :visibility="items ==='Frame' ? 'visible' : 'collapse'" height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Image v-for="(item,key) in thumbnailFrame" @tap="replaceItem('frame',$event)" :src="item" height='100%' width="20%"/>
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
                <StackLayout :visibility='mod' padding='5' paddingTop='15' paddingBottom='10' horizontalAlignment='right' backgroundColor='lightblue' height='100%' width='250'>
                    <GridLayout>
                    <StackLayout v-for='cart in cartlist'>
                            <StackLayout orientation='horizontal'>
                                <Image :src='cart.img' height='100' marginRight='10'/>
                                <Label verticalAlignment='center'>
                                    <span text='Price: '/>
                                    <span :text='cart.price'/>
                                </Label>
                            </StackLayout>
                        </StackLayout>
                        <Label verticalAlignment='bottom' horizontalAlignment='right' marginBottom='50' marginRight='20' text='Total: '>
                            <span text='Total: '/>
                            <span text='P 100'/>
                        </Label>
                        <StackLayout orientation='horizontal' height='35' fontSize='12' verticalAlignment='bottom' horizontalAlignment='right'>
                                <button text='Reserve' @tap='opencart("close")'></button>
                                <button text='Purchase'></button>
                        </StackLayout>
                    </GridLayout>
                </StackLayout>

                <GridLayout :visibility='filt' padding='5' paddingTop='20' paddingBottom='10' horizontalAlignment='right' backgroundColor='lightblue' height='100%' width='250'>
                    <StackLayout height='100%'>  
                        <Label text='Price Range: ' marginBottom='5'/>  
                        <Slider value="80"  marginBottom='10'/>
                        <Label text='Quality ' marginBottom='5'/>  
                        <StackLayout orientation='horizontal' height='35' fontSize='12' verticalAlignment='bottom' horizontalAlignment='right'>
                                <button text='Brandnew'></button>
                                <button text='Second Hand'></button>
                        </StackLayout>
                        <Label text='Product name ' marginBottom='5'/>
                        <Textfield hint='Product name' fontSize='12'/>
                        <Button marginTop='20' @tap='filter("close")'  class='search' verticalAlignment='bottom' horizontalAlignment='right' borderRadius='100' width='40' height='40' marginRight='10'></Button>
                
                    </StackLayout>  
                </GridLayout>
                <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
                
            </GridLayout>
            
        </RadSideDrawer>
    </Page>
</template>

<script >
const app = require("application")
import { topmost } from "ui/frame";
import Description from "./Description.vue"
import Inventory from "./Inventory.vue"
  export default {
    data() {
      return {
        cartlist: [{
            img: localStorage.getItem('cartimg'),
            price: 'P 100'
        }],
        Inventory: Inventory,
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
        thumbnailSaddle: ['~/assets/thumbnails/Seater_1.png', '~/assets/thumbnails/Seater_2.png',
        '~/assets/thumbnails/Seater_3.png', '~/assets/thumbnails/Seater_4.png',
        '~/assets/thumbnails/Seater_5.png'],
        thumbnailTire: ['~/assets/thumbnails/Wheel_1.png', '~/assets/thumbnails/Wheel_2.png'], 
        thumbnailFrame: ['~/assets/thumbnails/Frame_1.png', '~/assets/thumbnails/Frame_2.png',
        '~/assets/thumbnails/Frame_3.png', '~/assets/thumbnails/Frame_4.png',
        '~/assets/thumbnails/Frame_5.png'], 
        items: 'Brake',
        newparthandler: '~/assets/images/Handle_5.png',
        newpartsaddle: '~/assets/images/Seater_2.png',
        newpartframe: '~/assets/images/Frame_1.png',
        mod: 'collapse',
        filt: 'collapse'
      }
    },
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
        // this.animate()
    },
    props: ['UserName'],
    methods: {
        filter(a) {
            if(a === 'open')
            {
                this.filt='visible'
            }
            else
            {
                this.filt = 'collapse'
            }
        },
        opencart(a) {
            if(a === 'open')
            {
                this.mod='visible'
            }
            else
            {
                this.mod = 'collapse'
            }
            
        },
        showItems(a) {
            this.items = a
            // this.handleruy = true;
        },
        visibleCollapse() {
            this.items = 'Brake'
        },
        replaceItem(a,b) {
            if (a === 'handlerbar') {
                console.log(this.newparthandler)
                this.$navigateTo(Description,{
                            props: {
                                New: b.object.src,
                                Current: '~/assets/thumbnails/Handle_5.png'
                            }
                        })
                // for (var i=0; i<this.listHandlerBar.length; i++) {
                //     this.newparthandler = this.listHandlerBar[b]
                // }
            }
            else if (a === 'saddle') {
                this.$navigateTo(Description,{
                            props: {
                                New: b.object.src,
                                Current: '~/assets/thumbnails/Seater_2.png',
                            }
                        })
                // for (var i=0; i<this.listSaddle.length; i++) {
                //     this.newpartsaddle = this.listSaddle[b]
                // }
            }
            else if (a === 'frame') {
                this.$navigateTo(Description,{
                            props: {
                                New: b.object.src,
                                Current: '~/assets/thumbnails/Frame_1.png'
                            }
                        })
                // for (var i=0; i<this.listFrame.length; i++) {
                //     this.newpartframe = this.listFrame[b]
                // }
            }
        },
        animate() {
            // confirm({
            // title: "Confirmation",
            // message: "Are you sure you want to save your work?",
            // okButtonText: "YES",
            // cancelButtonText: "NO"
            // }).then(result => {
            
            // })
            // setTimeout(() => {
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
            // }, 3000);
            

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
    .cart {
    background-image: url("~/assets/images/cart.png");
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
