import Taro, { Component } from '@tarojs/taro'
import { Button, Text } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button';
interface QkyButtonProps extends ButtonProps{
    /**文本说明 */
    text:string
}
export default class QkyButton extends Component<QkyButtonProps> {
    static defaultProps = {
        compStyle: '',
        textStyle: '',
        openType: '',
        plain: false,
        loading: false,
        disabled: false,
        onClick: () => {},
        onGetUserInfo: () => {}
    }
    render () {
        const {
          openType, loading, disabled, text,
          onClick, onGetUserInfo
        } = this.props
        return (
          <Button
            loading={loading}
            disabled={disabled}
            openType={openType}
            onClick={onClick}
            onGetUserInfo={onGetUserInfo}
          >
            <Text>
              {text}
            </Text>
          </Button>
        )
      }
}