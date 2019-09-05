import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class WheelPicker extends React.Component {
	state = {
		selectedItemPosition: props.selectedItemPosition || 0,
	}

	static defaultProps = {
		style: {
			width: 200,
			height: 150,
		},
	}
	
	componentDidUpdate(prevProps, prevState){
		if (prevState.selectedItemPosition !== this.props.selectedItemPosition){
			this.setState({ selectedItemPosition: this.props.selectedItemPosition })
		}
	}

	onItemSelected = (value, index) => {
		if (this.props.onItemSelected) {
			this.props.onItemSelected(index)
		}
		this.setState({selectedItemPosition: index})
	}

	getItemTextSize = () => {
		let {allowFontScaling,itemTextSize} = this.props
		if(itemTextSize && allowFontScaling ){
			itemTextSize =  PixelRatio.getFontScale() * PixelRatio.get() * itemTextSize
		}
		return itemTextSize
	}

	ItemStyle = {
		height: '100%',
		width: '90%',
		textAlign: this.props.itemTextAlign || "",
		textAlign: this.props.itemTextAlign || "",
		textAlign: this.props.itemTextAlign || "",
		textAlign: this.props.itemTextAlign,
		textAlign: this.props.itemTextAlign,
	}

	render() {
		const data = this.props.data
		if (!data || !data.length < 0) return null
		return (
			<Picker
				selectedValue={data[this.state.selectedItemPosition]}
				onValueChange={this.onItemSelected}
				// itemStyle = {this.ItemStyle}
				itemStyle = {{
					fontSize: this.props.itemTextSize || 12,
					fontFamily: this.props.itemTextAlign || "",
					textAlign: this.props.itemTextAlign,
					textAlign: this.props.itemTextAlign,
					textAlign: this.props.itemTextAlign,
					textAlign: this.props.itemTextAlign,
					textAlign: this.props.itemTextAlign,
				}}
				{...this.props}>
					{
						this.props.PersianNumber ?
						this.props.data.map((i, index) => <Picker.Item key={index} label={i} value={i} />) :
						this.props.data.map((i, index) => <Picker.Item key={index} label={i} value={i} />)
					}
			</Picker>
		)
	}
} 
