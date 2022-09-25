import React from 'react';
import {Link} from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import {pd20px, tagCard, tagImg} from './tags.module.less';

const TagCard = (props) => {
    const {
        imgNode, name, description, color,
    } = props;
    const tagPage = Config.pages.tag;
    let imgSrc = imgNode.publicURL;

    return (
        <Link className={tagCard} to={Utils.resolvePageUrl(tagPage, name)}>
            <div className={tagCard}>
                <div
                    className={tagImg}
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                    }}
                />
                <div className={pd20px}>
                    <div className="textCenter">
                        <h4 style={{color: `${color}`}}>
                            #
                            {name}
                        </h4>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default TagCard;
