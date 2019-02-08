import './item.scss';
import React from 'react';
import {
  Card, Icon, Image, Placeholder, Popup,
} from 'semantic-ui-react';
import moment from 'moment';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.loadImage = this.loadImage.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      imgloading: true,
    };
  }

  loadImage() {
    this.setState({ imgloading: false });
  }

  renderPopup = data => (
    <Popup trigger={this.renderItem()}>
      <Popup.Header className="itemHeader">{data.title}</Popup.Header>
      <Popup.Content>
        <span className='date'>{moment(data.import_datetime).format('MMMM Do YYYY')}</span>
      </Popup.Content>
      <Popup.Content>
        <Icon name="registered outline" />Rating: {data.rating}
      </Popup.Content>
    </Popup>
  )

  renderItem() {
    const { isFavorite, data, actions } = this.props;
    const { imgloading } = this.state;
    return (
      <div>
          <Card as='a' >
              {imgloading ? (
                <Placeholder>
                  <Placeholder.Image as='img' onLoad={this.loadImage} src={data.images.fixed_width.url} square />
                  <Placeholder.Header>
                    <Placeholder.Line length='very short' />
                  </Placeholder.Header>
                </Placeholder>
              ) : (
                <Image href={data.embed_url} target="_blank" key={data.id}
                      src={data.images.fixed_width.url} alt={data.title} />
              )}
            <Card.Content color="blue" extra>
              <Icon onClick={ isFavorite ? () => actions.removeFromFavorites(data)
                : () => { actions.addToFavorites(data); } } color="red" size="large"
                      name={isFavorite ? 'heart' : 'heart outline'} />
            </Card.Content>
          </Card>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    return (
      this.renderPopup(data)
    );
  }
}
