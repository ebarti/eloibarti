import React from 'react';
import {Col, Row} from 'antd';
import ProgressBar from '../../Progress';
import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';

const SkillsProgress = ({data}) => {
    const lengthSkills = data.allSkillsJson.edges.length;
    const groupArray = data.allSkillsJson.edges
        .map((edge) => edge.node)
        .reduce((accumulator, current, index, original) =>
            ((index % 1) === 0)
                ? accumulator.concat([original.slice(index, index + 1)])
                : accumulator, []
        )
        .filter((single, index) => index < lengthSkills);
    return (
        <div style={{marginTop: 26}}>
            <h2>My Skills</h2>
            <Row gutter={[20, 20]}>
                {
                    groupArray.map((group) => (
                        <Col xs={24} sm={24} md={12}>
                            {
                                group.map((node) => (
                                    <ProgressBar
                                        percent={node.percent}
                                        text={node.text}
                                    />
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

SkillsProgress.propTypes = {
    data: PropTypes.shape({
        allSkillsJson: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        text: PropTypes.string.isRequired,
                        percent: PropTypes.number.isRequired
                    }).isRequired,
                }).isRequired,
            ).isRequired,
        }).isRequired,
    }).isRequired,
};


export default function SkillsP(props) {
    return (
        <StaticQuery
            query={graphql`
          {
            allSkillsJson{
              edges {
                node {
                  text
                  percent
                }
              }
            }
          }
        `}
            render={data => <SkillsProgress data={data} {...props} />}
        />
    );
};
