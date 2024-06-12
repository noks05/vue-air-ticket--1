<template>
    <headerAuth />
    <main class="main">
        <nav aria-label="breadcrumb" style="border-top: 0.1rem solid rgba(235, 235, 235, 0.55); padding: 16px 0;">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li class="breadcrumb-item active">Вход</li>
                </ol>
            </div>
        </nav>
        <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
            style="background-image:url(./assets/images/form_sig_up.jpg) !important; height: 720px;">
            <div class="container">
                <div class="form-box">
                    <div class="form-tab">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="sign_in">
                                <form action="#">
                                    <div class="custom"
                                        style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px;">
                                        <h4 style="font-family: Gilroy-Medium !important; font-size: 20px;">Вход по
                                            отпечатку пальца</h4>
                                        <img src="../../assets/newImg/finger.png" alt="finger">
                                    </div>
                                    <div class="form-footer">

                                    </div>
                                </form>
                                <div class="form-choice">
                                    <p class="text-center" style="font-family: Gilroy-Medium !important; font-size: 16px;">
                                        Войти другим способом</p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-g"
                                                >
                                                <!-- <i class="icon-google"></i> -->
                                              <span style="height: 18px">По номеру телефона</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-f"
                                              >
                                                <!-- <i class="icon-facebook-f"></i> -->
                                              <span style="height: 18px">По номеру участника</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import Tabs from '../../components/elements/Tabs.vue';
import headerAuth from '@/components/partial/headers/headerAuth.vue';
export default {
    components: {
        Tabs,
        headerAuth
    },
    data: function () {
        return {
            tabsData: [
                {
                    id: 'sign_in',
                    title: 'Sign In',
                    active: true
                },
                {
                    id: 'register',
                    title: 'Register'
                }
            ]
        };
    }
};
</script>
<style scoped>
@media screen and (max-width:468px) {
    .form-box{
        margin-top: 60px !important;
    }
}

</style>