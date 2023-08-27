In this project we are gonna cover function based components , 

===================================================================================

Day 1 :

---------------------------------------------------------------------------------------------------

    Every component in react goes through a life cycle. When a component is mounted with dom of browser
     that component life cycle is started.

    After usage of component it will be unmounted.

    But whenever the component is in the browser  it can get updates , 
    this is the update life cycle of component and whenever these changes happen react will give event
     / notification .



Important Life cycle methods :

    1.ComponentDidMount

    Method in React that is executed automatically after a component is rendered for the first time in
     the DOM.
    This is a good place to initiate network requests or data fetching. You can make an API call here and update the component's state with the fetched data

        componentDidMount() {

        // Perform network request

            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => this.setState({ data }))
                .catch(error => console.error(error));
        }

    2.ComponentDidUpdate

    If you need to make additional network requests when the component's state 
    or props change, you can do so here. 
    Be cautious not to cause infinite loops by making a request that updates 
    the component's state.

        componentDidUpdate(prevProps, prevState) {

            if (this.props.userId !== prevProps.userId) {

                // Fetch new user data based on updated props

                fetch(`https://api.example.com/users/${this.props.userId}`)
                .then(response => response.json())
                .then(userData => this.setState({ userData }))
                .catch(error => console.error(error));
        }
        }

    3.ComponentWillUnmount

    This is where you can clean up resources associated with the component, 
    such as subscriptions or timers. For network requests or ongoing processes,
     you can cancel requests and release resources to avoid memory leaks.


    componentWillUnmount() {

            // Cancel network requests or clean up other resources
            // For example, if using Axios:
            this.cancelRequestSource.cancel('Component is unmounting');
    }

     As of React 16.3 and later, the componentWillUnmount lifecycle
      method has been deprecated. In functional components, you can achieve 
      the same cleanup functionality using the useEffect hook.

-------------------------------------------------------------------------------------------------------------

Virtual Dom

React makes a tree based on component level and updates the DOM.
This tree is known as Virtual Dom.
React has calculation , based on that it will update the Dom

React uses this virtual DOM to compare the current state of the application with
 the desired state, and then it calculates the minimal set of changes needed to update the actual DOM.

Here's a simplified overview of how the process works:

   1. Render Virtual DOM: When you create or update components in your React 
   application, React generates a new virtual DOM based on the component hierarchy
    and their current state/props.

   2.  Diffing: React performs a process called "reconciliation," which involves 
   comparing the previous virtual DOM with the new one to find out what changes have
    occurred.

   3. Calculate Changes: React calculates the difference between the previous and new 
   virtual DOMs. This difference is often referred to as the "diff" or "change set."

   4. Update: React uses the calculated change set to update the actual DOM.
    Instead of directly modifying the entire DOM, it applies only the necessary
     changes to bring the actual DOM in line with the desired state.


   By performing these steps, React minimizes the direct manipulation of the 
   DOM, which can be slow and resource-intensive. This approach improves the 
   performance of your application by reducing the number of actual DOM updates.

   In terms of calculations, here's a bit more detail on what React calculates
    during the diffing process:

        Element Changes:
        
         React compares the type of elements (HTML tags or custom components)
        between the previous and new virtual DOM. If the types are different,
         it completely replaces the subtree. If the types are the same, it 
        compares their attributes (props) and updates only the changed attributes.

        Child Nodes:
        
         React compares the children of elements in the virtual DOM. 
         It identifies additions, deletions, and changes in the order
          of children.

        Keys:
        
         When rendering lists of items, using a unique key prop for each item 
         helps React efficiently update and reorder the list without unnecessary 
         changes. React uses keys to match elements between updates and optimize 
         the diffing process.

        Function Components:
        
         When a function component updates, React recalculates the function's
          output and compares it to the previous output. If there's a 
          difference, React updates the corresponding portion of the actual DOM.

--------------------------------------------------------------------------------------------------------------