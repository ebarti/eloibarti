import React from 'react';

import ImageCard from '../Image/Image';
import {experience,} from './experience.module.less'

const Experience = (data) => {
    const {img, company, title, years, location} = data;
    return (
        <div className={`${experience}`}>
            <div className="grid grid-cols-16">
                <div className="col-span-2 xs:col-span-4 lg:col-span-2">
                    <div>
                        <ImageCard
                            alt={''}
                            image={img}
                            imageStyle={{
                                height: 60,
                                width: 60
                            }}/>
                    </div>
                </div>
                <div className="xs:col-span-8 lg:col-span-12 row-span-2 flex-auto" >
                    <div>
                        <h3>{company}</h3>
                    </div>
                    <div>
                        <h5>{title}</h5>
                    </div>
                </div>
                <div className="xs:col-span-3 lg:col-span-3 grid-rows-2 flex-auto">
                    <div className="col-span-3 row-span-1">
                        <h5>{years}</h5>
                    </div>
                    <div className="col-span-3 row-span-1">
                        <h5>{location}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;
