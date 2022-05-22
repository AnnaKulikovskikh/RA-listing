
export default function Listing (props) {
  if (props.data.state !== "active") return null

  let currency = ''
  let currencyView = true 
  if (props.data.currency_code === "USD") {
    currency = "$"
    currencyView = false
  } else if (props.data.currency_code === "EUR") {
    currency = "€"
    currencyView = false
  }

  let style = "item-quantity level-low"
  // if (props.data.quantity > 20) {
  //   style = "item-quantity level-high"
  // } else if (props.data.quantity > 10) {
  //   style = "item-quantity level-medium"
  // }

    return(  
      <div className="item-list">
        <div className="item">
          <div className="item-image">
            <a href={props.data.url}>
              <img src={props.data.MainImage.url_570xN} alt=""noimage/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{props.data.title.length > 50 ? `${props.data.title.slice(0, 50)}...`: props.data.title}</p>
            {/* <p className="item-price">$3.99</p> */}
            <p className="item-price">{currency}{props.data.price}</p>
            <p className="item-price">{currencyView && props.data['currency_code']}</p>
            <p className={style}>{props.data.quantity}</p>
          </div>
        </div>
      </div>
    )
}