// import React from 'react';
// import { connect } from 'dva';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import Tooltip from 'antd/lib/tooltip';
import Alert from 'antd/lib/alert';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Steps from 'antd/lib/steps';
import Upload from 'antd/lib/upload';
// import OriginTable from 'antd/lib/table';
import Divider from 'antd/lib/divider';
// import OriginPagination from 'antd/lib/pagination';
import Radio from 'antd/lib/radio';
import Modal from 'antd/lib/modal';
import Tabs from 'antd/lib/tabs';
import Dropdown from 'antd/lib/dropdown';
import Badge from 'antd/lib/badge';
import Spin from 'antd/lib/spin';
import Switch from 'antd/lib/switch';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Collapse from 'antd/lib/collapse';
import Checkbox from 'antd/lib/checkbox';
import Popover from 'antd/lib/popover';
import Popconfirm from 'antd/lib/popconfirm';
import Card from 'antd/lib/card';
import Comment from 'antd/lib/comment';
import Avatar from 'antd/lib/avatar';
import List from 'antd/lib/list';

// import MobileTable from './mobileTable';

// function mapStateToPropsTable({ mobile }) {
//   return {
//     isMobile: mobile.isMobile,
//   };
// }

// const Table = connect(mapStateToPropsTable)((props) => {
//   const { isMobile, useMobileTable } = props;
//   let { size } = props;
//   if (!size) {
//     size = isMobile ? 'middle' : 'default';
//   }
//   if (useMobileTable && isMobile) {
//     return <MobileTable {...props} />;
//   }
//   return (
//     <OriginTable
//       {...props}
//       size={size}
//     />
//   );
// });

// function mapStateToPropsPagination({ mobile }) {
//   return {
//     isMobile: mobile.isMobile,
//   };
// }

// const Pagination = connect(mapStateToPropsPagination)((props) => {
//   const { isMobile } = props;
//   let { size } = props;
//   if (!size) {
//     size = isMobile ? 'small' : '';
//   }
//   return (
//     <OriginPagination
//       {...props}
//       size={size}
//     />
//   );
// });

export {
  Button,
  message,
  Menu,
  Icon,
  Breadcrumb,
  Tooltip,
  Alert,
  Form,
  Input,
  Select,
  Steps,
  Upload,
  // Table,
  Divider,
  // Pagination,
  Radio,
  Modal,
  Tabs,
  Dropdown,
  Badge,
  Spin,
  Switch,
  Row,
  Col,
  Collapse,
  Checkbox,
  Popover,
  Popconfirm,
  Card,
  Comment,
  Avatar,
  List,
};
