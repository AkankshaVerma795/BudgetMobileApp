import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const BudgetEntryForm = ({
  onSubmit,
  itemName,
  plannedAmount,
  actualAmount,
  onChangeName,
  onChangePlannedAmount,
  onChangeActualAmount,
}) => {
  return (
    <div style={{ fontSize: 20, color: "red", marginBottom: 20 }}>
      <view style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextField
          label="Item Name"
          value={itemName}
          onChangeText={onChangeName}
        />
        <TextField
          label="Planned Amount"
          value={plannedAmount}
          onChangeText={onChangePlannedAmount}
          keyboardType="numeric"
        />
        <TextField
          label="Actual Amount"
          value={actualAmount}
          onChangeText={onChangeActualAmount}
          keyboardType="numeric"
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Save
        </Button>
      </view>
    </div>
  );
};

export default BudgetEntryForm;
