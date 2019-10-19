import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const imgs = [
  {
    alt_description: "white car",
    id: "m3m-lnR90uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m3m-lnR90u",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m3m-lnR9uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m3m-ln90uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m3m-ln0uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1532245128003-3db26c775465?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "3m-ln0uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m-lnR90uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m390uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "m-lnR9",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1496437792604-55ca7c5c3f6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  },
  {
    alt_description: "white car",
    id: "uM",
    urls: {
      regular:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2ODE1fQ"
    }
  }
];

class App extends React.Component {
  state = { images: imgs };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
