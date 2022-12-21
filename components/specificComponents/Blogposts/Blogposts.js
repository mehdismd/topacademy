// import React, { Component } from "react";

// export default class Blogposts extends Component {

//     constructor(props) {
//        super(props);
//    }

//    render() {
//        return (
//            <div>
//                Blogposts:{this.props.blok.title}</div>
//        );

//    }
// }

import React, { Component } from "react";
import css from "./Blogposts.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Blogposts extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="blogposts" />
					<div className={css["blogposts__main-content"]}>
						<div id="blogposts__short-description" key="blogposts__short-description" className={css["blogposts__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Posts about us</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
                    </div>

                    {this.props.blok.bottombloks && this.props.blok.bottombloks.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
		);

	}
}