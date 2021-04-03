import React, { Component } from "react";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";

class instagram extends Component {
  render() {
    return (
      <div>
        <Get url="/api/user" params={{ id: "12345" }}>
          {(error, response, isLoading, makeRequest, axios) => {
            if (error) {
              return (
                <div>
                  Something bad happened: {error.message}{" "}
                  <button
                    onClick={() => makeRequest({ params: { reload: true } })}
                  >
                    Retry
                  </button>
                </div>
              );
            } else if (isLoading) {
              return <div>Loading...</div>;
            } else if (response !== null) {
              return (
                <div>
                  {response.data.message}{" "}
                  <button
                    onClick={() => makeRequest({ params: { refresh: true } })}
                  >
                    Refresh
                  </button>
                </div>
              );
            }
            return <div>Default message before request is made.</div>;
          }}
        </Get>
      </div>
    );
  }
}

export default instagram;
