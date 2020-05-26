<template>
  <div class="template1">
    <div class="welcome">
      <div class="bg-shape item1"></div>
      <div class="bg-shape item2"></div>
      <div class="bg-shape item3"></div>

      <div>
        <div class="shape" v-if="welcome.img">
          <img :src="welcome.img" />
        </div>
      </div>

      <div class="text">
        <h6>{{welcome.title}}</h6>
        <p>{{welcome.desc}}</p>
      </div>
    </div>

    <div class="sections">
      <div class="category" v-for="(section, index) in sections" :key="index">
        <div class="title">
          <h6>{{section.title}}</h6>
        </div>

        <div class="value">
          <div class="details" v-for="(details, detailsIndex) in section.details" :key="detailsIndex">
            <h5 v-if="details.heading">{{details.heading}}</h5>
            <div class="udf">
              <i v-if="details.udf1">{{details.udf1}}</i>
              <i v-if="details.udf2">{{details.udf2}}</i>
              <i v-if="details.udf3">{{details.udf3}}</i>
            </div>
            <p v-if="details.desc">{{details.desc}}</p>

            <div v-for="(bar, barIndex) in details.bars" :key="barIndex">
              <strong>{{bar.title}}</strong>
              <div class="bar">
                <div :style="'width:' + bar.percent + '%'"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="projects">
      <h5>CONTRIBUTIONS</h5>
      <div class="list">
        <div v-for="(data, index) in projects" :key="index">
          <h6 v-if="data.title">{{data.title}}</h6>
          <p v-if="data.desc">{{data.desc}}</p>
          <u v-if="data.url" target="_blank" :href="data.url">{{data.url}}</u>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template1',
  props: ['welcome', 'sections', 'projects'],
  mounted () {
    this.appearTransitions()
  },
  watch: {
    '$route' () {
      document.querySelectorAll('.title h6, .welcome h6, .welcome p').forEach(item => {
        item.classList.remove('swipe')
      })

      document.querySelectorAll('.projects .list > div, .welcome .shape').forEach(item => {
        item.classList.remove('fader')
      })

      this.appearTransitions()
    }
  },
  methods: {
    appearTransitions () {
      setTimeout(() => {
        let appearOnSwipe = new IntersectionObserver((entries, appearOnSwipe) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return
            } else {
              entry.target.classList.add('swipe')
              appearOnSwipe.unobserve(entry.target)
            }
          })
        })

        document.querySelectorAll('.title h6, .welcome h6, .welcome p').forEach(item => {
          appearOnSwipe.observe(item)
        })

        let appearOnFade = new IntersectionObserver((entries, appearOnFade) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return
            } else {
              entry.target.classList.add('fader')
              appearOnFade.unobserve(entry.target)
            }
          })
        })

        document.querySelectorAll('.projects .list > div, .welcome .shape').forEach(item => {
          appearOnFade.observe(item)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/themes.scss';

  .template1 {
    .welcome {
      background: linear-gradient(120deg, #000000, #3f3e3e);
      padding: 10% 20px;
      position: relative;
      overflow: hidden;

      .bg-shape {
        position: absolute;
        opacity: 0.5;

        &.item1 {
          top: 10px;
          left: 20px;
          height: 200px;
          width: 270px;
          border-radius: 5px;
          animation: rotate1 12s 1s infinite alternate;
          background: rgba(228, 231, 231, 0.2);
        }
        &.item2 {
          top: 10px;
          right: 20px;
          height: 300px;
          width: 370px;
          border-radius: 5px;
          animation: rotate2 15s 1s infinite alternate;
          background: rgba(228, 231, 231, 0.2);
        }
        &.item3 {
          top: 60px;
          left: 20%;
          height: 200px;
          width: 250px;
          border-radius: 5px;
          animation: rotate3 17s 1s infinite alternate;
          background: rgba(228, 231, 231, 0.2);
        }
      }

      > div {
        flex: 1;
      }

      .shape {
        height: 450px;
        width: 350px;
        transform: skew(-15deg);
        margin: auto;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, #363636, #020202);
        border-radius: 25px;

        img {
          border-radius: 25px;
          transform: skew(15deg);
          max-width: 90%;
        }
      }

      h6 {
        font-size: 40px;
        font-weight: 700;
        color: $primary;
        margin: 10px 0;
      }
      p {
        font-size: 28px;
        font-weight: 500;
        line-height: 1.3;
        letter-spacing: 1px;
        color: $white;
      }
    }

    .sections {
      margin: 5% 10%;

      .category {
        border-bottom: 2px solid $grey-outline;
        padding: 20px;

        &:last-child {
          border-bottom: none;
        }

        .title {
          min-width: 30%;

          h6 {
            font-size: 22px;
            color: #3b3b3b;
            font-weight: 500;
            text-transform: uppercase;
            margin: 15px 0;
            display: inline-block;
            border-bottom: 3px solid $primary;
            letter-spacing: 1.5px;

            &::after {
              content: '';
              display: block;
              margin: 5px auto auto;
            }
          }
        }

        .value {
          flex: 1;

          .details {
            margin-bottom: 30px;
          }

          h5 {
            font-size: 30px;
            color: #000000;
            font-weight: 700;
            margin: 15px 0;
            line-height: 1.2;
            letter-spacing: 1.5px;
          }
          p {
            font-size: 20px;
            color: #5a6161;
            font-weight: 400;
            margin: 20px 0;
            line-height: 1.2;
          }
          i {
            font-size: 18px;
            color: #787a7a;
            font-weight: 400;

            &::after {
              content: '';
              margin: 0 10px;
              height: 15px;
              width: 2px;
              background: $primary;
              display: inline-block;
            }

            &:last-child {
              &::after {
                content: none;
              }
            }
          }
          strong {
            font-size: 16px;
            color: #201b1b;
            font-weight: 600;
            text-transform: uppercase;
            margin: 10px 0;
            display: block;
          }

          .bar {
            height: 30px;
            margin-bottom: 20px;
            background: $grey-outline;
            border-radius: 5px;

            > div {
              height: 30px;
              background: $primary;
              border-radius: 5px;
            }
          }
        }
      }
    }

    .projects {
      background: linear-gradient(45deg, #e4e7e7, #dae6e6);
      padding: 5% 10%;

      h5 {
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 1px;
        margin: 0 0 25px;
        color: $dark;
        text-align: center;
      }

      .list {
        margin-top: 20px;

        > div {
          background: linear-gradient(220deg, $primary, #000000);
          color: $white;
          border-radius: 5px;
          padding: 15px;
          position: relative;
          transition: .5s;

          &:hover {
            transform: scale(1.05, 1.05);
            transition: 1s;
          }

          h6 {
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 1px;
            margin: 15px 0;
          }
          p {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.2;
            margin: 10px 0;
          }
          u {
            margin: 10px 0;
            font-size: 15px;
            font-weight: 500;
            color: $link;
            cursor: pointer;
          }
        }
      }
    }
  }

  @keyframes rotate1 {
    0% {
      transform: rotate(10deg)
    }
    50% {
      transform: translate(200px, 180px) rotate(-270deg);
    }
    100% {
      transform: translate(400px, 270px) rotate(-360deg);
    }
  }
  @keyframes rotate2 {
    0% {
      transform: rotate(-200deg)
    }
    50% {
      transform: translate(-200px, 180px) rotate(200deg) skew(60deg);
    }
    100% {
      transform: translate(-400px, 270px) rotate(360deg);
    }
  }
  @keyframes rotate3 {
    0% {
      transform: rotate(-200deg)
    }
    30% {
      transform: translate(-100px, 180px) rotate(100deg) skew(20deg);
    }
    60% {
      transform: translate(-200px, -100px) rotate(230deg) skew(90deg);
    }
    100% {
      transform: translate(-300px, 270px) rotate(360deg);
    }
  }

  .fader {
    animation: fader 3.5s linear;
  }

  @keyframes fader {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  @media screen and (max-width: 719px) {
    .template1 {
      overflow: hidden;
    }

    .welcome {
      .bg-shape {
        height: 120px !important;
        width: 70px !important;
        top: 100px !important;
      }
      .shape {
        height: 350px !important;
        width: 80% !important;
        max-width: 300px;
      }
      .text {
        padding: 20px;
        text-align: center;

        h6 {
          margin-top: 40px;
          font-size: 30px;
        }
        p {
          font-size: 20px;
        }
      }
    }

    .sections {
      margin: 5%;

      .category {
        .title {
          text-align: center;
        }
        h6 {
          margin: 30px 0;
          font-size: 18px;
        }
        h5 {
          margin: 20px 0;
          text-align: center;
          font-size: 22px !important;
        }
        .udf {
          text-align: center;

          i {
            margin: 15px 0;
            font-size: 18px;
          }
        }
        p {
          font-size: 17px !important;
        }
      }
    }

    .projects {
      .list {
        > div {
          margin: 35px 0;

          h6 {
            line-height: 1.2;
            font-size: 20px;
          }
          p, u {
            font-size: 15px;
          }
        }
      }
    }

    .swipe {
      animation: swipe 1s linear;
    }

    @keyframes swipe {
      0% {
        opacity: 0;
        transform: translateY(-40px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media screen and (min-width: 720px) {
    .welcome {
      display: flex;
      align-items: center;

      p {
        max-width: 80%;
      }

      .swipe {
        animation: swipe-left 1s linear;
      }
    }

    .sections {
      .category {
        display: flex;

        .bar {
          width: 80%;
        }
      }

      .swipe {
        animation: swipe-right 1s linear;
      }
    }

    .projects {
      .list {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 20px;

        > div {
          min-width: 300px;
          max-width: 500px;
        }
      }
    }
    
    @keyframes swipe-left {
      0% {
        opacity: 0;
        transform: translateX(40px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes swipe-right {
      0% {
        opacity: 0;
        transform: translateX(-40px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
</style>
