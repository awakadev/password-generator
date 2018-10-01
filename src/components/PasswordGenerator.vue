<template>
    <el-row>
        <el-form inline :model="options" :rules="rules" ref="form">
            <el-col>
                <el-checkbox v-model="options.upper" label="A-Z" border></el-checkbox>
                <el-checkbox v-model="options.lower" label="a-z" border></el-checkbox>
                <el-checkbox v-model="options.numbers" label="0-9" border></el-checkbox>
                <el-checkbox v-model="options.special" label="%, *, ),?, @, #, $, ~ " border></el-checkbox>
            </el-col>
            <el-col>
                <el-form-item prop="min">
                    <el-input type="number" min="1" max="32" v-model="options.min">
                        <template slot="prepend">min</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="max">
                    <el-input type="number" min="1" max="32" v-model="options.max">
                        <template slot="append">max</template>
                    </el-input>
                </el-form-item>
            </el-col>
            <el-col>
                <el-button type="primary" @click="generate">Generate</el-button>
            </el-col>
        </el-form>
        <el-col v-for="(item, index) in passwords" :key="index">
            <div class="passwords" :style="{width: width + 'px'}">
                <el-rate
                        v-model="item.strength"
                        disabled
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
                <el-popover
                        v-model="item.visible"
                        placement="right"
                        trigger="click"
                        content="password copied to clipboard">
                    <el-button type="text" v-clipboard:copy="item.password" slot="reference" @click="toggleVisible(index)">{{item.password}}</el-button>
                </el-popover>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import passwordStrength from 'zxcvbn'

export default {
  name: 'PasswordGenerator',

  data () {
    let minRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('min is required, must be a number'))
      } else if (typeof Number(value) !== 'number') {
        callback(new Error('must be a number'))
      } else if (Number(value) > Number(this.options.max)) {
        callback(new Error('can`t be bigger than max'))
      } else if (Number(value) < 1) {
        callback(new Error('can`t be smaller than 1'))
      } else {
        callback()
      }
    }
    let maxRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('max is required, must be a number'))
      } else if (typeof Number(value) !== 'number') {
        callback(new Error('must be a number'))
      } else if (Number(value) < Number(this.options.min)) {
        callback(new Error('can`t be smaller than min'))
      } else if (Number(value) > 32) {
        callback(new Error('can`t be bigger than 32'))
      } else {
        callback()
      }
    }

    return {
      options: {
        upper: true,
        lower: true,
        numbers: true,
        special: true,
        min: 12,
        max: 12
      },
      passwords: [],
      rules: {
        min: [
          { validator: minRule, trigger: 'blur' }
        ],
        max: [
          { validator: maxRule, trigger: 'blur' }
        ]
      }
    }
  },

  computed: {
    line () {
      let line = ''
      this.options.lower ? line += 'abcdefghijklmnopqrstuvwxyz' : line += ''
      this.options.upper ? line += 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() : line += ''
      this.options.numbers ? line += '0123456789' : line += ''
      this.options.special ? line += '!@#$%^&*()_+~}{[]?><-=' : line += ''
      return line
    },
    width () {
      let max = this.passwords.reduce((r, a) => {
        if (r < a.password.length) {
          return a.password.length
        }
        return r
      }, 0)
      return max * 9 + 135
    }
  },

  methods: {
    generate () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.passwords.splice(0, this.passwords.length)

          for (let i = 0; i < 10; i++) {
            let password = ''
            while (password.length < this.options.max) {
              password += this.line[Math.floor(Math.random() * this.line.length)]
            }
            let response = password.slice(Math.floor(Math.random() * (this.options.max - this.options.min)))

            this.passwords.push({
              visible: false,
              password: response,
              strength: passwordStrength(response).score + 1
            })
          }
        } else {
          return false
        }
      })
    },
    toggleVisible (index) {
      setTimeout(() => {
        this.passwords.splice(index, 1, {
          visible: false,
          password: this.passwords[index].password,
          strength: this.passwords[index].strength
        })
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
