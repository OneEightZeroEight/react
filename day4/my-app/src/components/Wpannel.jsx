import React from "react";
class Wpannel extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			cards: []
		}
	}
	getIndexInfo() {
		React.axios.get('./jsons/index.json')
			.then((response) => {
				console.log(response);
				this.setState({
					cards: response.data.data.cards
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	componentDidMount() {
		this.getIndexInfo();
		window.onscroll = (e) => {
			console.log(e)
		}
	}
	render() {
		return (
			<div className="pannelwrap" style={{
				paddingTop: "0px",
				paddingBottom: "0px",
				marginTop: "84px"
			}}>
				{
					(() => {
						return this.state.cards.map((item, index) => {
							return (
								<div key={index} className="wb-item-wrap">
									<div className="wb-item">
										<div className="card m-panel card9 f-weibo">
											<div className="card-wrap">
												{/* <div className="card-title f-card-title">
												<div className="m-ctrl-box">
													<div className="m-diy-btn m-box-col m-box-center m-box-center-a"><img src="https://h5.sinaimg.cn/upload/1080/674/2017/12/25/timeline_title_novelty3x_default.png" />
														<a>皮这一下很开心</a></div>
												</div>
											</div> */}
												<header className="weibo-top m-box">
													<div className="m-avatar-box m-box-center"><a href="/profile/2370784220" className="m-img-box">
														<img src={item.mblog.user.avatar_hd} alt="avatar" />
													</a></div>
													<div className="m-box-dir m-box-col m-box-center">
														<div className="m-text-box"><a href="/profile/2370784220" className="">
															<h3 className="m-text-cut">{
																item.mblog.user.screen_name
															}
																<i className="m-icon m-icon-vipl7"></i></h3>
														</a>
															<h4 className="m-text-cut"><span className="time">{item.mblog.created_at}</span> <span className="from">
																来自 {item.mblog.source}</span>

															</h4>
														</div>
													</div>

												</header>
											</div>
											<article className="weibo-main">
												<div className="card-wrap">
													<div className="weibo-og">
														<div className="weibo-text" dangerouslySetInnerHTML={{ __html: item.mblog.text }}>

														</div>
														<div>
															<div className="weibo-media-wraps weibo-media f-media media-b">
																<ul className="m-auto-list">
																	<li className="m-auto-box2">
																		<div className="m-img-box m-imghold-4-3">
																			<img src="https://wx2.sinaimg.cn/orj360/a121e3fbgy1fs632af3z8j20fk0fk3ze.jpg"
																				className="f-bg-img" alt="f-bg-img" />

																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>

											</article>
											<footer className="f-footer-ctrl">
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-report"></i>
													<h4>16</h4>
												</div>
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-comments"></i>
													<h4>4</h4>
												</div>
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-like"></i>
													<h4>45</h4>
												</div>
												<aside><i className="m-font m-font-dot-more"></i></aside>
											</footer>
										</div>
									</div>
								</div>
							)
						})
					})()
				}
			</div>
		)
	}
}

export default Wpannel