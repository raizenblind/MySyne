<template>
<Page actionBarHidden="true">

    <GridLayout>
        <!-- <Gif height="100%" width='150%' src='~/assets/images/login.gif'/> -->
        <StackLayout :visibility='loginvisib' verticalAlignment='center' width='70%'>
            <!-- <Label text='MySyne' color='lightblue' fontSize='60' horizontalAlignment='center'></Label> -->
            <Image src="~/assets/images/Logo_Draft.png" marginTop='-20' height='250' width='250' horizontalAlignment='center'/>
            <TextField hint='Username' marginTop='-30' text='' width="50%" v-model="username">
            </TextField>

            <TextField hint='Password' text='' width="50%" v-model="password">

            </TextField>
            <StackLayout row='1' horizontalAlignment="center" orientation="horizontal">
                <Button text='Login' width='100' horizontalAlignment='center' @tap='Login'/>
                <Button text='Sign Up' horizontalAlignment='center' @tap='SignUp'/>
            </StackLayout>
        </StackLayout>

        <StackLayout :visibility='signupvisib' verticalAlignment='center' width='70%'>
                <!-- <Label text='MySyne' color='lightblue' fontSize='60' horizontalAlignment='center'></Label> -->
                <!-- <Image src="~/assets/images/Logo_Draft.png" marginTop='-20' height='250' width='250' horizontalAlignment='center'/> -->
                <TextField row='1' hint='Username' text='' width="50%" v-model="username"></TextField>
                <GridLayout width="50%" row="1" horizontalAlignment='center' height="40" marginBottom="10">
                    <TextField
                    id="pass"
                    row="1"
                    :secure="palitmata"
                    width="100%"
                    hint="Password"
                    v-model="password"
                    verticalAlignment='center'
                    horizontalAlignment='center'/>
                    <Image @tap="pikitmata" row="1" id="passeye" src="~/assets/images/hide.png" verticalAlignment="center" height="70%" marginRight="10" horizontalAlignment="right"/>
                </GridLayout>          
                <TextField hint='Email Address' text='' width="50%" v-model="emailadd"></TextField>
                <StackLayout row='1' horizontalAlignment="center" orientation="horizontal">
                    <Button text='Register' width='100' horizontalAlignment='center' @tap='RegisterMe'/>
                    <Button text='Cancel' horizontalAlignment='center'/>
                </StackLayout>
            </StackLayout>
    </GridLayout>
</Page>
</template>

<script >
import Dashboard from "./Dashboard.vue"
const app = require("application")
import * as http from "tns-core-modules/http";
import * as Toast from "nativescript-toast";
import { topmost } from 'ui/frame';
export default {
    data() {
        return {
        listOfItems: ['Handle', 'Sitter', 'Tyre', 'Frame', 'Crank'],
        msg: 'Hello World!',
        username: '',
        password: '',
        loginvisib: 'visible',
        signupvisib: 'collapse',
        uname: '',
        pass: '',
        confpass: '',
        emailadd: '',
        palitmata: true
        }
    },
    created() {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    },
    methods: {
        RegisterMe() {
            http.request({
              url: 'https://ws.durusthr.com/ILM_WS_Dev/MS_Register',
              method: "POST",
              headers: { "Content-Type": "application/json" },
              content: JSON.stringify({
                username: this.username,
                password: this.password,
                email: this.emailadd
                })
              }).then((response) => {
                  console.log(response.content.toJSON())
                  if(response.content.toJSON() !== "Success") {
                    Toast.makeText("Account Already Exists").show()
                  }
                  else {
                    Toast.makeText("Email sent successfully. Please check email periodically").show()
                    this.signupvisib = 'collapse'
                    this.loginvisib = 'visible'
                  }
              })
        },
        pikitmata()
        {
            var passeye = topmost().getViewById('passeye')
            if (this.palitmata === false)
            {
                passeye.src="~/assets/images/hide.png"
                this.palitmata = true
            }
            else
            {
                passeye.src="~/assets/images/show.png"
                this.palitmata = false
            }
        },
        Login() {
            // this.$navigateTo(Main, {clearHistory: true});
            http.request({
              url: 'https://ws.durusthr.com/ILM_WS_Dev/MS_Login',
              method: "POST",
              headers: { "Content-Type": "application/json" },
              content: JSON.stringify({
                username: this.username,
                pass: this.password
                })
              }).then((response) => {
                    console.log(response.content.toJSON())
                    // localStorage.setItem("UserName", this.username)
                    if (response.content.toJSON() === '1') {
                        console.log('dito')
                        Toast.makeText("Login Successful").show();
                        this.$navigateTo(Dashboard, {props: {
                                UserName: this.username
                            }})
                        // this.$navigateTo(Main,{
                        //     props: {
                        //         UserName: this.username
                        //     }
                        // })
                    }
                    else {
                        Toast.makeText("Incorrect Password. Please Try Again").show();
                    }
              }).catch(err => {
                Toast.makeText("Internet may not be available at the moment. Please check your internet connection.").show();
              })
        },
        SignUp() {
            this.signupvisib = 'visible'
            this.loginvisib = 'collapse'

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
