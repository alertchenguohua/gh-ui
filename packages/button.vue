<template>
  <button class="gh-button" :class="[`gh-button--${type}`, {
    'is-plain': plain, 
    'is-round': round, 
    'is-circle': circle,
    'is-disabled': disabled
  }]"
  :disabled="disabled"
  @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'gh-button',
  props: {
    // 类型
    type: {
      type: String,
      default: 'default'
    },
    // 
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.$slots)
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
.gh-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcfde6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -webkit-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    background: #ecf5ff;
    border-color: #c6e2ff;
  }
}
.gh-button--primary {
  color: #fff;
  background: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.gh-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.gh-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.gh-button.is-disabled {
  background: #fff;
  color: #f2f2f2;
  border-color: #f1f1f1;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #f1f1f1;
  }
}
</style>