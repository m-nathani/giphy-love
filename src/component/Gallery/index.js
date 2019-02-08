import React from 'react';
import MasonryLayout from 'react-masonry-layout';
import Item from 'component/Item';
import { Segment } from 'semantic-ui-react';
import { NoResult, Searching } from 'component/Message';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.renderNoResult = this.renderNoResult.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.renderSearching = this.renderSearching.bind(this);
    this.renderFavorite = this.renderFavorite.bind(this);
  }

  renderSearching() {
    const { searchTerm, isFavoriteRoute } = this.props;
    return (
      <Searching searchTerm={searchTerm} isFavoriteRoute={isFavoriteRoute} />
    );
  }

  renderNoResult() {
    return (
      <NoResult searchTerm={this.props.searchTerm} />
    );
  }

  renderGallery() {
    const {
      isLoading, data, actions, favorites, isFavoriteRoute,
    } = this.props;
    const result = isFavoriteRoute ? favorites : data || [];
    return (
      <MasonryLayout
        id="masonry-layout"
        position={true}
        sizes= {[
          { columns: 1, gutter: 10 },
          { mq: '480px', columns: 2, gutter: 25 },
          { mq: '576px', columns: 2, gutter: 25 }, // Small devices (landscape phones, 576px and up)
          { mq: '768px', columns: 3, gutter: 25 }, // Medium devices (tablets, 768px and up)
          { mq: '992px', columns: 4, gutter: 25 }, // Large devices (desktops, 992px and up)
          { mq: '1024px', columns: 4, gutter: 25 }, // Desktop devices (desktops, 1024px and up)
          { mq: '1200px', columns: 5, gutter: 25 }, // Extra large devices (large desktops, 1200px and up)
          { mq: '1400px', columns: 6, gutter: 25 },
          { mq: '1690px', columns: 7, gutter: 25 },
          { mq: '1900px', columns: 8, gutter: 25 },
          { mq: '2400px', columns: 11, gutter: 25 },
          { mq: '2800px', columns: 13, gutter: 25 },
          { mq: '3200', columns: 17, gutter: 25 },
          { mq: '4000', columns: 21, gutter: 25 },
        ]}
        infiniteScrollDisabled={isFavoriteRoute}
        infiniteScrollLoading={isLoading}
        infiniteScroll={actions.loadMoreGiphyData} >
        {result.map((item, i) => (
            <Segment.Inline
              key={i}
              style={{
                width: `${item.images.fixed_width.width}px`,
                height: `${+item.images.fixed_width.height + 50}px`,
                lineHeight: `${10}px`,
                color: 'white',
                display: 'block',
              }}>
              <Item actions={actions} data={item} isFavorite={favorites.some(fav => (fav.id === item.id))}/>
            </Segment.Inline>
        ))}
      </MasonryLayout>
    );
  }

  renderFavorite() {
    const { favorites } = this.props;
    return (
      favorites.length === 0 ? this.renderSearching() : this.renderGallery()
    );
  }

  render() {
    const {
      isLoading, noSearchResult, initial, isFavoriteRoute,
    } = this.props;
    return (
      <Segment padded style={{ alignItems: 'center' }} textAlign='center' placeholder loading={isLoading}>
        { // eslint-disable-next-line
          isFavoriteRoute ? this.renderFavorite() : initial ? this.renderSearching()
            : noSearchResult ? this.renderNoResult() : this.renderGallery()
        }
      </Segment>
    );
  }
}
