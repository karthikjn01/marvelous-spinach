import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <div class="inner">
                    <h2>Menu</h2>
                    <ul class="links">
                        {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                            <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link></li>
                        ))}
                    </ul>
                    {_.get(this.props, 'pageContext.site.data.menu.actions') && 
                        <ul class="actions stacked">
                            {_.map(_.get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', 'fit', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
                <Link class="close" to="#menu">Close</Link>
            </nav>
        );
    }
}
