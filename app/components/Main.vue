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
                </StackLayout>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*" >
                <Button @tap="$refs.drawer.nativeView.showDrawer()"  verticalAlignment='top' horizontalAlignment='left' backgroundColor='red' borderRadius='100' height='40' width='40' margin='10'></Button>
                
                <StackLayout orientation='vertical'>
                    <StackLayout class='fullscreen'>
                        <Gridlayout>
                            <Image src="~/assets/images/Handle_5.png" width="400" marginLeft='-5' marginTop='10' verticalAlignment='top'/>
                        
                            <Image src="~/assets/images/Main.png" width="400" marginBottom='100' verticalAlignment='bottom'/>
                            <StackLayout height='100' backgroundColor='lightgray' verticalAlignment='bottom'>
                                <StackLayout height='100%' orientation="horizontal" backgroundColor="lightblue" marginRight='1'>
                                    <Button v-for="item in listOfItems" :text="item" width="100" />
                                </StackLayout>
                            </StackLayout>
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
