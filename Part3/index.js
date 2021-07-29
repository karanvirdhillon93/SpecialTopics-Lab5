exports.handler = async (event) => {
    console.log("EVENT: \n" + JSON.stringify(event));
      
      // TODO implement
      const response = {
          statusCode: 200,
          body: JSON.stringify('Hello from Lambda!'),
          
      };
      return response;
  };
  