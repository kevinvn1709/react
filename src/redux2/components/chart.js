import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'

export default (props) => {
    return (
        <div>
            <Sparklines height={100} width={160} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesSpots />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} ({props.unit})</div>
        </div>
    )
}

function average(data) {
    return _.round(_.sum(data) / data.length);
}