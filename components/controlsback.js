<div className="controls">
          <BaseUnit
            name="Base Unit"
            valueLink={this.linkState('baseUnit')}
            valueLink2={this.linkState('baseDivisions')}
            valueLink3={this.linkState('baseVisibility')}
            valueLink4={this.linkState('baseOffSet')}
            state={this.state}
          />
          <BaseLine
            name="Base Line Height"
            valueLink={this.linkState('baseLineHeight')}
            valueLink2={this.linkState('baseLineHeightDivision')}
            valueLink3={this.linkState('baseLineVisibility')}
            state={this.state}
          />
          <BaseFontSize
            name="Base Font Size"
            valueLink={this.linkState('baseFontSize')}
            state={this.state}
          />
          <ModularScale
            name="Modular Scale"
            valueLink={this.linkState('modularScale')}
            state={this.state}
          />
          <Column
            name="Column width"
            valueLink={this.linkState('columnWidth')}
            valueLink2={this.linkState('gutterWidth')}
            valueLink3={this.linkState('rowHeight')}
            valueLink4={this.linkState('rowGutter')}
            valueLink5={this.linkState('columnVisibility')}
            state={this.state}
          />
        </div>
