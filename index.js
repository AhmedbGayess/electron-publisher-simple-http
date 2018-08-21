const {
  getCiTag,
  HttpPublisher,
  PublishContext,
  PublishOptions
} = require("electron-publish/out/publisher");
const { httpExecutor } = require("builder-util/out/nodeHttpExecutor");
const mime = require("mime");
const { configureRequestOptions } = require("builder-util-runtime");

class Publisher extends HttpPublisher {
  async doUpload(fileName, arch, dataLength, requestProcessor, file) {
    return await httpExecutor.doApiRequest(
      configureRequestOptions({
        hostname: "hostname",
        protocol: "http:",
        port: 8080,
        path: "/appname/win/x64",
        method: "POST",
        headers: {
          "X-File-Name": fileName,
          "Content-Type": mime.getType(fileName) || "application/octet-stream",
          "Content-Length": dataLength
        }
      }),
      this.context.cancellationToken,
      requestProcessor
    );
  }
}

module.exports = {
  default: Publisher
};
