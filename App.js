import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TextInput, Picker, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const WoodFormModal = () => {
  const formSchema = z.object({
    softwood: z.string().min(1, {
      message: "Softwood selection is required",
    }),
    quantityMeasure: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          if (typeof value === "number") {
            return value > 0;
          }
          return !isNaN(Number(value)) && Number(value) > 0;
        },
        {
          message: "Quantity must be a number greater than 0",
        }
      ),
    length: z.string().min(1, {
      message: "Length is required",
    }),
    finish: z.string().min(1, {
      message: "Finish is required",
    }),
    drying: z.string().min(1, {
      message: "Drying is required",
    }),
    strengthGrade: z.string().min(1, {
      message: "Strength Grade is required",
    }),
    visualQuantity: z.string().min(1, {
      message: "Visual Quality is required",
    }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [showCompany, setShowCompany] = useState(false);
  const [showWood, setShowWood] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    softwood: '',
    quantityMeasure: '',
    quantityUnit: "",
    length: "",
    finish: "",
    drying: "",
    strengthGrade: "",
    visualQuantity: ""
  })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showWood && (
        <View style={styles.formContainer}>
          <Text style={styles.header}>Wood Form</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Softwood</Text>
            <TextInput
              placeholder="Enter Softwood"
              style={styles.input}
              {...register('softwood')}
              value={selectedOptions.softwood}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  softwood: newValue,
                })
              }
            />
            {errors.softwood && <Text style={styles.error}>{errors.softwood.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantity Measure</Text>
            <TextInput
              placeholder="Enter Quantity Measure"
              style={styles.input}
              {...register('quantityMeasure')}
              value={selectedOptions.quantityMeasure}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  quantityMeasure: newValue,
                })
              }
            />
            {errors.quantityMeasure && <Text style={styles.error}>{errors.quantityMeasure.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Length</Text>
            <TextInput
              placeholder="Enter Length"
              style={styles.input}
              {...register('length')}
              value={selectedOptions.length}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  length: newValue,
                })
              }
            />
            {errors.length && <Text style={styles.error}>{errors.length.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Finish</Text>
            <TextInput
              placeholder="Enter Finish"
              style={styles.input}
              {...register('finish')}
              value={selectedOptions.finish}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  finish: newValue,
                })
              }
            />
            {errors.finish && <Text style={styles.error}>{errors.finish.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Drying</Text>
            <TextInput
              placeholder="Enter Drying"
              style={styles.input}
              {...register('drying')}
              value={selectedOptions.drying}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  drying: newValue,
                })
              }
            />
            {errors.drying && <Text style={styles.error}>{errors.drying.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Strength Grade</Text>
            <TextInput
              placeholder="Enter Strength Grade"
              style={styles.input}
              {...register('strengthGrade')}
              value={selectedOptions.strengthGrade}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  strengthGrade: newValue,
                })
              }
            />
            {errors.strengthGrade && <Text style={styles.error}>{errors.strengthGrade.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Visual Quality</Text>
            <TextInput
              placeholder="Enter Visual Quality"
              style={styles.input}
              {...register('visualQuantity')}
              value={selectedOptions.visualQuantity}
              onChange={(event, newValue) =>
                setSelectedOptions({
                  ...selectedOptions,
                  visualQuantity: newValue,
                })
              }
            />
            {errors.visualQuantity && <Text style={styles.error}>{errors.visualQuantity.message}</Text>}
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Submit"
            color="#314f32"
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default WoodFormModal;
