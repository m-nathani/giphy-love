import './item.scss';
import React from 'react';
import {
  Card, Icon, Image, Placeholder, Popup, Grid, Button, Header, Transition, Message,
} from 'semantic-ui-react';
import moment from 'moment';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.loadImage = this.loadImage.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.state = {
      imgloading: true,
      copy: false,
    };
  }

  loadImage() {
    this.setState({ imgloading: false });
  }

  copyToClipboard = (url) => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    document.execCommand('copy');
    this.setState({ copy: true });
    setTimeout(() => {
      this.setState({ copy: false });
    }, 1000);
  };

  renderPopup = data => (
    <Popup trigger={this.renderItem()} flowing hoverable>
    <Grid centered divided columns={1}>
      <Grid.Column textAlign='center'>
        <Header as='h4' className="itemHeader">{data.title}</Header>
        <p>
          <Icon name="registered outline" />Rating: {data.rating}
        </p>
        <p>
          <span className='date'>{moment(data.import_datetime).format('MMMM Do YYYY')}</span>
        </p>
        {
          document.queryCommandSupported('copy')
          && <Button onClick={() => this.copyToClipboard(data.embed_url)} icon="copy" label="Copy Link" />
        }
        <Transition.Group animation="drop" duration={500}>
            {this.state.copy && <Message size="mini" info header={'Copied!'} size='small' />}
        </Transition.Group>
      </Grid.Column>
    </Grid>
    </Popup>
  )

  renderItem() {
    const { isFavorite, data, actions } = this.props;
    const { imgloading } = this.state;
    return (
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
        <Card.Content color="blue" extra style={isFavorite ? { padding: '3.5px' } : {}} >
          {
            isFavorite ? <Image size="mini" src="images/favorite.gif"
                                onClick={ () => actions.removeFromFavorites(data)} />
              : <Icon onClick={ () => { actions.addToFavorites(data); } } color="red" size="large"
                      name={'heart outline'} />
          }
        </Card.Content>
      </Card>
    );
  }

  render() {
    const { data } = this.props;
    return (
      this.renderPopup(data)
    );
  }
}
