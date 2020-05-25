<template>
  <div class="preview">
    <div class="welcome">
      <div class="bg-shape item1"></div>
      <div class="bg-shape item2"></div>
      <div class="bg-shape item3"></div>

      <div>
        <div class="shape" v-if="getterWelcome.img">
          <img :src="getterWelcome.img" />
        </div>
      </div>

      <div>
        <h6>{{getterWelcome.title}}</h6>
        <p>{{getterWelcome.desc}}</p>
      </div>
    </div>

    <div class="sections">
      <div class="category" v-for="(section, index) in getterSectionsList" :key="index">
        <div class="title">
          <h6>{{section.title}}</h6>
        </div>

        <div class="value">
          <div class="details" v-for="(details, detailsIndex) in section.details" :key="detailsIndex">
            <h5 v-if="details.heading">{{details.heading}}</h5>
            <div>
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
      <div v-for="(data, index) in getterProjectsList" :key="index">
        <h6>{{data.title}}</h6>
        <p>{{data.desc}}</p>
        <u>{{data.url}}</u>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Preview',
  computed: {
    ...mapGetters(['getterWelcome', 'getterProjectsList', 'getterSectionsList'])
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .preview {
    .welcome {
      background: linear-gradient(120deg, #000000, #3f3e3e);
      display: flex;
      align-items: center;
      padding: 10% 20px;
      position: relative;

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
        background: $white;
        margin: auto;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, #363636, #020202);
        border-radius: 25px;

        img {
          border-radius: 25px;
          transform: skew(15deg);
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
        max-width: 80%;
      }
    }

    .sections {
      margin: 5% 10%;

      .category {
        display: flex;
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
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 10px;
            display: inline-block;
            border-bottom: 3px solid $primary;

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
            font-weight: 800;
            margin: 15px 0;
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
            font-weight: 500;

            &::after {
              content: '';
              margin: 0 10px;
              height: 5px;
              width: 5px;
              border-radius: 50%;
              background: $primary;
              display: inline-block;
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
            width: 80%;
            height: 30px;
            margin-bottom: 20px;
            background: $grey-outline;
            border-radius: 5px;

            > div {
              height: 30px;
              background: $primary;
            }
          }
        }
      }
    }

    .projects {
      background: linear-gradient(45deg, #e4e7e7, #dae6e6);
      padding: 5% 10%;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 15px;

      > div {
        background: linear-gradient(220deg, $primary, #000000);
        color: $white;
        border-radius: 5px;
        padding: 15px;

        h6 {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 1px;
          margin: 15px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.2;
          margin: 10px;
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
</style>
