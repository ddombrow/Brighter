import Gun from "gun";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import ConsoleLink from "./lib/apollo-link-console";
import { ApolloProvider } from "react-apollo";
import { execute, makePromise } from "apollo-link";
import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

(function() {
	const alink = new ConsoleLink();
	const client = new ApolloClient({
		link: alink,
		cache: new InMemoryCache()
	});

	ReactDOM.render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,
		document.getElementById("root")
	);
})();
