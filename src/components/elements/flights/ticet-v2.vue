<template >
    <div class="flight-wrapper">
        <div class="cover">
            <div class="flight-item" @mouseover="goTo" @mouseleave="goToLeave" @click="toggleFlight" v-if="detailed">
                <div class="start-flight">
                    <img :src="data.img1" alt="">
                    <h6>{{ data.address1 }}</h6>
                    <h6>{{ data.data1 }}</h6>
                </div>
                <div class="flight-line">
                    <div class="tooltip-flight tol2" v-if="tooltip5">
                        Вылет: Россия,
                        Шереметьево (SVO)
                        <img class="corner" src="../../../assets/newImg/icons/Polygon.svg" alt="">
                    </div>
                    <div class="tooltip-flight tol3" v-if="tooltip6">
                        Прибытие: Россия,
                        Шереметьево (SVO)
                        <img class="corner" src="../../../assets/newImg/icons/Polygon.svg" alt="">
                    </div>
                    <div class="wrap-flight">
                        <img @mouseover="tooltipFunc2" @mouseleave="tooltipClose2"
                            src="../../../assets/newImg/icons/ellipse.svg" alt="">
                        <div class="line"></div>
                        <img @mouseover="tooltipFunc3" @mouseleave="tooltipClose3"
                            src="../../../assets/newImg/icons/airplane.svg" alt="">
                    </div>
                    <div class="hour">
                        {{ data.time }}
                    </div>
                </div>
                <div class="start-flight">
                    <img :src="data.img2" alt="">
                    <h6>{{ data.address2 }}</h6>
                    <h6>{{ data.data2 }}</h6>
                </div>
                <div class="flight-info">
                    <h6>{{ data.addition }}</h6>
                    <h6>{{ data.addName }}</h6>
                </div>
                <div class="flight-passenger-info" v-if="info">
                    <div class="top-icons">
                        <img :src="data.icons1" alt="">
                        <img :src="data.icons2" alt="">
                        <img :src="data.icons3" alt="">
                    </div>
                    <div class="bottom-info">
                        <div class="item-bot">E</div>
                    </div>
                </div>
                <div class="detailed" v-else>
                    <img src="../../../assets/newImg/icons/airplane2.svg" alt="">
                    Подробнее
                </div>
            </div>
            <div class="flight-item detailed-info" @mouseover="goTo" @mouseleave="goToLeave" @click="toggleFlight" v-else>
                <div class="detailed-cover">
                    <div class="start-flight detailed-start">
                        <img src="../../../assets/newImg/logo-air.png" alt="">
                        <h6>20:20 VOG</h6>
                        <h6 style="white-space:nowrap;">29 февраля 2024</h6>
                        <h6>Восточный</h6>
                    </div>
                    <div class="flight-line">
                        <div class="wrap-flight">
                            <img src="../../../assets/newImg/icons/ellipse.svg" alt="">
                            <div class="line"></div>
                            <img src="../../../assets/newImg/icons/airplane.svg" alt="">
                        </div>
                        <div class="hour">
                            18 ч 10м
                        </div>
                    </div>
                    <div class="start-flight detailed-start">
                        <img src="../../../assets/newImg/logo-air.png" alt="">
                        <h6>22:25 SVO</h6>
                        <h6 style="white-space:nowrap;">29 февраля 2024</h6>
                        <h6>Восточный</h6>
                    </div>
                    <div class="flight-info">
                        <h6>DP-6968</h6>
                        <h6>Победа</h6>
                    </div>
                    <div class="flight-passenger-info" :style="{ display: detailed ? 'block' : 'none' }" v-if="info">
                        <div class="top-icons">
                            <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
                            <img src="../../../assets/newImg/icons/arrows.svg" alt="">
                            <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
                        </div>
                        <div class="bottom-info">
                            <div class="item-bot">E</div>
                        </div>
                    </div>
                    <div class="detailed" :style="{ display: detailed ? 'block' : 'none' }" v-else>
                        Подробнее
                        <img src="../../../assets/newImg/icons/airplane2.svg" alt="">
                    </div>
                </div>
                <div class="bottom-detailed">
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
                        Багаж: Да
                    </div>
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/arrows.svg" alt="">
                        Обмен: Да
                    </div>
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
                        Возврат: Да
                    </div>
                </div>
            </div>
            <div class="flight-item" @mouseover="goFrom" @mouseleave="goFromLeave" @click="toggleFlight" v-if="detailed">
                <div class="start-flight">
                    <img :src="data.img3" alt="">
                    <h6>{{ data.address3 }}</h6>
                    <h6>{{ data.data3 }}</h6>
                </div>
                <div class="flight-line">
                    <div class="tooltip-flight" v-if="tooltip">
                        Пересадка: Россия, <br>
                        Шереметьево (SVO)
                        <img class="corner" src="../../../assets/newImg/icons/Polygon.svg" alt="">
                    </div>
                    <div class="tooltip-flight tol2" v-if="tooltip2">
                        Вылет: Россия,
                        Шереметьево (SVO)
                        <img class="corner" src="../../../assets/newImg/icons/Polygon.svg" alt="">
                    </div>
                    <div class="tooltip-flight tol3" v-if="tooltip3">
                        Прибытие: Россия,
                        Шереметьево (SVO)
                        <img class="corner" src="../../../assets/newImg/icons/Polygon.svg" alt="">
                    </div>
                    <div class="wrap-flight">
                        <img @mouseover="tooltipFunc2" @mouseleave="tooltipClose2"
                            src="../../../assets/newImg/icons/ellipse.svg" alt="">
                        <div class="line"></div>
                        <img @mouseover="tooltipFunc" @mouseleave="tooltipClose"
                            src="../../../assets/newImg/icons/ellipse.svg" alt="">
                        <div class="line">
                        </div>
                        <img @mouseover="tooltipFunc3" @mouseleave="tooltipClose3"
                            src="../../../assets/newImg/icons/airplane.svg" alt="">
                    </div>
                    <div class="hour">
                        {{ data.time2 }}
                    </div>
                </div>
                <div class="start-flight">
                    <img :src="data.img4" alt="">
                    <h6>{{ data.address4 }}</h6>
                    <h6>{{ data.data4 }}</h6>
                </div>
                <div class="flight-info">
                    <h6>{{ data.addition2 }}</h6>
                    <h6>{{ data.addName2 }}</h6>
                </div>
                <div class="flight-passenger-info" v-if="info2">
                    <div class="top-icons">
                        <img :src="data.icons21" alt="">
                        <img :src="data.icons22" alt="">
                        <img :src="data.icons23" alt="">
                    </div>
                    <div class="bottom-info">
                        <div class="item-bot">E</div>
                    </div>
                </div>
                <div class="detailed" v-else>
                    <img src="../../../assets/newImg/icons/airplane3.svg" alt="">
                    Подробнее
                </div>
            </div>
            <div class="flight-item detailed-info" @mouseover="goFrom" @mouseleave="goFromLeave" @click="toggleFlight"
                v-else>
                <div class="detailed-cover">
                    <div class="start-flight detailed-start">
                        <img src="../../../assets/newImg/logo-air.png" alt="">
                        <h6>20:20 VOG</h6>
                        <h6>07.02.2024</h6>
                    </div>
                    <div class="flight-line">
                        <div class="wrap-flight">
                            <img src="../../../assets/newImg/icons/ellipse.svg" alt="">
                            <div class="line"></div>
                            <img src="../../../assets/newImg/icons/ellipse.svg" alt="">
                            <div class="line">
                            </div>
                            <img src="../../../assets/newImg/icons/airplane.svg" alt="">
                        </div>
                        <div class="hour">
                            18 ч 10м
                        </div>
                    </div>
                    <div class="start-flight detailed-start">
                        <img src="../../../assets/newImg/logo-air.png" alt="">
                        <h6>22:25 SVO</h6>
                        <h6>07.02.2024</h6>
                    </div>
                    <div class="flight-info">
                        <h6>DP-6968</h6>
                        <h6>Победа</h6>
                    </div>
                    <div class="flight-passenger-info" :style="{ display: detailed ? 'block' : 'none' }" v-if="info2">
                        <div class="top-icons">
                            <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
                            <img src="../../../assets/newImg/icons/arrows.svg" alt="">
                            <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
                        </div>
                        <div class="bottom-info">
                            <div class="item-bot">E</div>
                        </div>
                    </div>
                    <div class="detailed" :style="{ display: detailed ? 'block' : 'none' }" v-else>
                        <img src="../../../assets/newImg/icons/airplane3.svg" alt="">
                        Подробнее
                    </div>
                </div>
                <div class="bottom-detailed">
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
                        Багаж: Да
                    </div>
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/arrows.svg" alt="">
                        Обмен: Да
                    </div>
                    <div class="bottom-item">
                        <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
                        Возврат: Да
                    </div>
                </div>
            </div>
        </div>
        <button class="price-flight">
            {{ data.price }}
        </button>
    </div>
</template>
<script>
export default {
    props: {
        detailed: Boolean,
        data: Array
    },
    data() {
        return {
            info: true,
            info2: true,
            tooltip: false,
            tooltip2: false,
            tooltip3: false,
            detailed: true,
            isDetailed: this.detailed,
        }
    },
    mounted() {
        this.dataShow()
    },
    methods: {
        dataShow() {
            console.log(this.data);
        },
        goTo() {
            this.info = false
        },
        goToLeave() {
            this.info = true
        },
        goFrom() {
            this.info2 = false
        },
        goFromLeave() {
            this.info2 = true
        },
        toggleFlight() {
            this.isDetailed = !this.isDetailed
            this.$emit('update:detailed', this.isDetailed);

        },
        tooltipFunc() {
            this.tooltip = true
        },
        tooltipClose() {
            this.tooltip = false
        },
        tooltipFunc2() {
            this.tooltip2 = true
        },
        tooltipClose2() {
            this.tooltip2 = false
        },
        tooltipFunc3() {
            this.tooltip3 = true
        },
        tooltipClose3() {
            this.tooltip3 = false
        }
    },
}
</script>
<style scoped>
.flight-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EBEBEB;
    gap: 20px;
}

.cover {
    width: 100%;
    height: auto;
    margin: 10px 0;
}

.flight-item {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    cursor: pointer;
}

.detailed-cover {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    cursor: pointer;
    padding: 10px;
}

.detailed-info {
    background-color: #f4f7ff;
    flex-direction: column;
    border-radius: 8px;
  overflow: hidden !important;
}

.bottom-detailed {
    padding: 10px;
    width: 100%;
    height: auto;
    background: #f8f9fa;
    display: flex;
    gap: 30px;
}

.bottom-item {
    /* width: auto; */
    display: flex;
    gap: 5px;
}

.start-flight {
    width: 80px;
    height: auto;
    /* text-align: center; */
    position: relative;
}

.detailed-start {
    width: 120px !important;

}

.start-flight h6 {
    font-family: Gilroy-Medium !important;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 0 !important;
}

.flight-line {
    position: relative;
    width: 465px;
    height: auto;
    /* display: flex; */
    align-items: center;
    gap: 5px;
}

.wrap-flight {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    text-align: center;
}

.hour {
    height: 0;
    text-align: center;
    line-height: 20px;
}

.line {
    width: 100%;
    height: 10px;
    border-bottom: 3px dotted #777777;
    margin-bottom: 7px;
}

.flight-info {
    padding: 10px;
    height: 70px;
    margin: 0 20px;
}

.flight-info h6 {
    font-family: Gilroy-Medium !important;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 0 !important;
}

.flight-passenger-info {
    padding: 10px;
    height: 70px;
    margin: 0 20px;
}

.top-icons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.bottom-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.item-bot {
    width: 20px;
    height: auto;
    font-family: Gilroy-Medium !important;
}

.detailed {
    padding: 10px;
    height: 70px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    font-family: Gilroy-Medium !important;
    font-size: 16px;
    gap: 5px;
    color: var(--primary_bg);
}

.price-flight {
    width: 140px;
    height: auto;
    /*padding: 16px 37.5px;*/
    font-family: Gilroy-Medium !important;
    font-size: 16px;
  border-radius: 8px;
    color:var(--primary_bg);
    border: 1px solid var(--primary_bg);
}

.tooltip-flight {
    position: absolute;
    padding: 15px 20px;
    z-index: 999;
    left: 135px;
    top: -90px;
    border-radius: .4rem;
    background-color: var(--primary_bg);
    color: #fff;
    white-space: nowrap;
}

.tol2 {
    left: -137px;
    top: -60px;
    white-space: nowrap;
}

.tol3 {
    white-space: nowrap;
    left: 300px;
    top: -60px;
}

.corner {
    position: absolute;
    bottom: -10px;
    left: 50%;
}

@media screen and (max-width:990px) {
    .flight-wrapper {
        width: 90% !important;
        margin-left: 5%;
    }

    .flight-line {
        width: 30% !important;
    }

    .tooltip-flight {
        left: -135px;
    }


    .tol3 {
        left: 0;
    }
}

@media screen and (max-width:780px) {
    .flight-info {
        /* display: none; */
        padding: 0 !important;
        margin: 0 !important;
    }

}

@media screen and (max-width:768px) {
    .flight-item {
        justify-content: space-between;
    }

    .detailed-cover {
        justify-content: space-between;
    }

    .detailed {
        display: none;
    }

    .flight-wrapper {
        flex-direction: column;
        gap: 0;
    }

    .price-flight {
        width: 100% !important;
        margin-bottom: 20px !important;
    }

    .flight-info {
        display: none;
    }

    .flight-passenger-info {
        display: none;
    }
}
</style>