<template>
  <uploader class="uploader-example"
            :options="options"
            @complete="onUploadComplete"
            ref="uploader" >
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>将文件夹拖曳至此，或者</p>
      <uploader-btn :directory="true">选择文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
export default {
  name: "UploadFileFolder",
  props: ["userId", "taskName"],
  data() {
    return {
      options: {
        target: ["api", this.userId, this.taskName, "dataset"]
                .join("/"),
        testChunks: false
      },
      attrs: {
        accept: "image/*"
      }
    }
  },
  methods: {
    onUploadComplete() {
      const uploader = this.$refs.uploader.uploader
      let filePath = Object.getOwnPropertyNames(uploader.filePaths)[0]
      let datasetName = filePath.split("/")[0]
      this.$emit("upload-complete", datasetName)
    }
  }
}
</script>

<style scoped>
.uploader-example {
  top: 5px;
  width: auto;
  padding: 15px;
  font-size: 18px;
  box-shadow: 0 0 0px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>