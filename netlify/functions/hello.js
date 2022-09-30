exports.handler = async function (event, context) {
	console.log("console log line")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World now" }),
  };
}
