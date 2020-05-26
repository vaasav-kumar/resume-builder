<template>
  <div class="template2">
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
  name: 'Template2',
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

  .template2 {
    $primary: #c14151;

    .welcome {
      padding: 10% 20px;
      position: relative;
      border-bottom: 2px solid $grey-outline;
      overflow: hidden;

      .bg-shape {
        position: absolute;
        opacity: 0.5;

        &.item1 {
          top: 10px;
          left: 20px;
          height: 200px;
          width: 270px;
          border-radius: 5px 55px;
          animation: rotate1 12s 1s infinite alternate;
          background: rgba(199, 245, 245, 0.2);
        }
        &.item2 {
          top: 10px;
          right: 20px;
          height: 300px;
          width: 370px;
          border-radius: 5px 70px 25px;
          animation: rotate2 15s 1s infinite alternate;
          background: rgba(244, 157, 172, 0.2);
        }
        &.item3 {
          top: 60px;
          left: 50%;
          height: 200px;
          width: 250px;
          border-radius: 25px 60px;
          animation: rotate3 17s 1s infinite alternate;
          background: rgba(138, 126, 126, 0.2);
        }
      }

      > div {
        flex: 1;
      }

      .shape {
        height: 450px;
        width: 350px;
        margin: auto;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(25deg, #040303, #a40337);
        border-radius: 25px;

        img {
          border-radius: 25px;
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
      }
    }

    .sections {
      margin: 5% 10%;

      .category {
        border-bottom: 2px solid $grey-outline;
        padding: 20px;

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
      background: linear-gradient(45deg, #f6f8ee, #fde6f1);
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
    animation: fader 2.5s linear;
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
    .template2 {
      overflow: hidden;
    }

    .welcome {
      background: linear-gradient(360deg, #fafafa 70%, #480b24 30%);

      .bg-shape {
        height: 150px !important;
        width: 110px !important;
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

  @media screen and (min-width: 720px) {
    .welcome {
      background: linear-gradient(270deg, #fafafa 75%, #480b24 25%);
      display: flex;
      align-items: center;

      p {
        max-width: 80%;
      }
    }

    .sections {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .category {
        width: 40%;
      }
    }

    .projects {
      .list {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 20px;

        > div {
          min-width: 300px;
          max-width: 500px;
          padding: 25px !important;
        }
      }
    }
  }
</style>
