<template>
  <div class="switches smartthings-switches">
    <Loading v-if="loading" />
    <div class="no-content" v-else-if="!Object.keys(devices).length">No switches found on SmartThings.</div>

    <Switch :loading="loading" :name="name" :state="device.on" @toggle="toggle(name)"
            v-for="(device, name) in devices" :key="name" :has-info="true"
            @info="selectedDevice = name; $refs.switchInfoModal.show()" />
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import SwitchMixin from "@/components/panels/Switches/Mixin";
import Switch from "@/components/panels/Switches/Switch";

export default {
  name: "Smartthings",
  components: {Switch, Loading},
  mixins: [SwitchMixin],
}
</script>

<style lang="scss" scoped>
@import "../common";
</style>
